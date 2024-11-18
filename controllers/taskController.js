const Task = require('../models/task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks.' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task.' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found.' });

    await task.update({ title, description, status });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task.' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found.' });

    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete task.' });
  }
};
