const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

// Middleware Global
server.use((req, res, next) => {
  console.count('Total de requisições');
  return next();
});

// Middleware local
function checkIdExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find( p => p.id === id );

  if(!project){
    return res.status(400).json({ error: 'This id does not exist!' });
  }

  return next();
}

// Create projects
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: [],
  }

  projects.push(project);

  return res.json(project);
});

// Show all projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Edit project title
server.put('/projects/:id', checkIdExists, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find( p => p.id === id );

  project.title = title;

  return res.json(project)
});

// Delete project
server.delete('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex( p => p.id === id );

  projects.splice(project, 1);

  return res.send();
});

// Add task title
server.post('/projects/:id/tasks', checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find( p => p.id === id );
  
  project.tasks.push(title)

  return res.json(project)
});

server.listen(3000);
