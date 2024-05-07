-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 06:14 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `golden_luxury_auto_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `glav1_car_purchase_document`
--

CREATE TABLE `glav1_car_purchase_document` (
  `car_purchase_document_aid` int(11) NOT NULL,
  `car_purchase_document_is_active` tinyint(1) NOT NULL,
  `car_purchase_document_car_id` int(11) NOT NULL,
  `car_purchase_document_amount` varchar(50) NOT NULL,
  `car_purchase_document_date` varchar(20) NOT NULL,
  `car_purchase_document_id` int(11) NOT NULL,
  `car_purchase_document_datetime` varchar(20) NOT NULL,
  `car_purchase_document_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car_purchase_document`
--
ALTER TABLE `glav1_car_purchase_document`
  ADD PRIMARY KEY (`car_purchase_document_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car_purchase_document`
--
ALTER TABLE `glav1_car_purchase_document`
  MODIFY `car_purchase_document_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
