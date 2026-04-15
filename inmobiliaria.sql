-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2025 a las 02:01:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inmobiliaria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE `alquiler` (
  `id` int(12) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `localidad` varchar(30) NOT NULL,
  `superficie` int(11) NOT NULL,
  `ambientes` int(10) NOT NULL,
  `patio` int(2) NOT NULL,
  `precio` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alquiler`
--

INSERT INTO `alquiler` (`id`, `titulo`, `descripcion`, `imagen`, `tipo`, `localidad`, `superficie`, `ambientes`, `patio`, `precio`) VALUES
(1, 'Departamento moderno', 'Departamento en zona céntrica, ideal para pareja joven', 'Departamentomoderno Departamentoenzonacéntrica.jpg', 'Departamento', 'Junín', 65, 2, 0, 120000),
(2, 'Casa familiar', 'Casa amplia con jardín y cochera, cerca de escuelas', 'Casafamiliar.jpg', 'Casa', 'Bragado', 150, 4, 1, 180000),
(3, 'Departamento luminoso', 'Departamento en el centro con balcon y excelente vista', 'Departamentoluminoso.jpg', 'Departamento', 'Junin', 65, 3, 0, 50000),
(4, 'Casa con jardin', 'Casa con jardin, ideal para familias', 'Casaconjardin.jpg', 'Casa', 'Chacabuco', 86, 4, 2, 95000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(12) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `localidad` varchar(30) NOT NULL,
  `superficie` int(11) NOT NULL,
  `ambientes` int(10) NOT NULL,
  `patio` int(2) NOT NULL,
  `precio` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `titulo`, `descripcion`, `imagen`, `tipo`, `localidad`, `superficie`, `ambientes`, `patio`, `precio`) VALUES
(1, 'Casa moderna con jardín', 'Fachada blanca con detalles en madera, jardín delantero y cielo despejado.', 'Casamodernaconjardin.jpg', 'Casa', 'Junin', 120, 4, 0, 185000),
(2, 'Casa quinta con pileta y quincho', 'Parque arbolado, pileta grande y quincho techado ideal para reuniones.', 'Casaquintaconpiletayquincho.jpg', 'Casa Quinta', 'Lujan', 350, 5, 0, 320000),
(3, 'Departamento en torre con amenities', 'Torre moderna con gimnasio, SUM, pileta y seguridad 24hs.', 'Departamentoentorreconamenities.jpg', 'Departamento', 'Bragado', 85, 3, 0, 145000),
(4, 'Dúplex en zona comercial', 'Dos plantas, cochera, patio pequeño y excelente ubicación sobre avenida.', 'Duplexenzonacomercial.jpg', 'Dúplex', 'Chacabuco', 110, 4, 0, 165000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
