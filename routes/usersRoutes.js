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
 *   description: API Gestion Usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: objet
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         id:
 *           type: string
 *           description: ID generado automaticamente por mongoDB
 *         nombresUsuario:
 *           type: string
 *           description: Nombre completo del usuario
 *         celularUsuario:
 *           type: number
 *           description: Número celular del usuario
 *       example:
 *         id: 6447f75de574d20290c67671
 *         nombresUsurio: Yuliet D
 *         celularUsurio: 3114763687
 */

//Ruta es para gestionar usuarios

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agregar nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombresUsuario y celularUsuario son requeridos
 */

router.post('/', agregar);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
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
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a consultar
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuarion con el ID especifico no fue encontrado
 */

router.get('/:id', listarUno);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El usuario con el id especificado no fue editado
 */

router.put('/:id', editar);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el id especificado no fue eliminado
 */

router.delete('/:id', eliminar);

export default router;
