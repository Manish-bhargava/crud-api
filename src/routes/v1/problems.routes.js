const express = require('express');

const { problemController } = require('../../controllers');

const problemRouter = express.Router();

// If any request comes and route continues with /ping, we map it to pingProblemController
problemRouter.get('/ping', problemController.pingProblemController);

problemRouter.get('/:id', problemController.getProblem);
problemRouter.post('/', problemController.addProblem);

problemRouter.get('/', problemController.getProblems);



problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.put('/:id', problemController.updateProblem);


module.exports = problemRouter;