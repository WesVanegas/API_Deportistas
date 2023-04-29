import express from 'express';
const router = express.Router();

import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
} from '../controllers/deportistaController.js';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API Gestion Deportistas
 */

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         -nombre
*         -apellidos
*         -edad
*         -celular
*         -deporte
*         -genero 
*       properties:
*         id:
*           type: string
*           description: id general automaticamente por mongo
*
*         nombre:
*           type: string
*           description: Nombre del deportista.
* 
*         apellidos:
*           type: string
*           description: apellidos del deportista.
*  
*         edad:
*           type: number,
*           description: edad del deportista.
*  
*         celular:
*           type: number,
*           description: celular del deportista.
*  
*         deporte:
*            type: string,
*            description: deporte que practica el deportista.
*           
*         genero:
*            type: string,
*            description: genero del deportista.
*               
*       example:
*         nombre: Veronica
*         apellidos: sanchez rodriguez
*         edad: 25
*         celular: 3145763456
*         deporte: futbol
*         genero: binario
*/

//Ruta es para gestionar deportistas.

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Agregar nuevo deportista
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Deportista agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombre, apellidos, edad, celular, deporte y genero son requeridos
 */

router.post('/', agregar);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los deportistas
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los deportistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', listar);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un deportista por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del deportista a consultar
 *     responses:
 *       200:
 *         description: Deportista encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El deportista con el ID especifico no fue encontrado
 */

router.get('/:id', listarUno);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar deportista existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del deportista a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Deportista actualizado exitosamente
 *       404:
 *         description: El deportista con el id especificado no fue editado
 */

router.put('/:id', editar);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar deportista existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del deportista a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Deportista eliminado exitosamente
 *       404:
 *         description: El deportista con el id especificado no fue eliminado
 */

router.delete('/:id', eliminar);

export default router;
