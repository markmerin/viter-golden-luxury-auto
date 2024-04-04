-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2024 at 09:09 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
-- Table structure for table `glav1_client`
--

CREATE TABLE `glav1_client` (
  `client_aid` int(11) NOT NULL,
  `client_is_active` tinyint(1) NOT NULL,
  `client_fname` varchar(128) NOT NULL,
  `client_lname` varchar(128) NOT NULL,
  `client_contact` varchar(20) NOT NULL,
  `client_email` varchar(255) NOT NULL,
  `client_bank_name` varchar(128) NOT NULL,
  `client_bank_routing_number` int(11) NOT NULL,
  `client_bank_account_number` int(11) NOT NULL,
  `client_created` datetime NOT NULL,
  `client_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_client`
--

INSERT INTO `glav1_client` (`client_aid`, `client_is_active`, `client_fname`, `client_lname`, `client_contact`, `client_email`, `client_bank_name`, `client_bank_routing_number`, `client_bank_account_number`, `client_created`, `client_datetime`) VALUES
(2, 1, 'Ivan', 'Adao', '09662993797', 'macmerin24@gmail.com', 'China Bank Corp.', 10320013, 2147483647, '2024-04-03 12:58:49', '0000-00-00 00:00:00'),
(3, 1, 'Ramon', 'Plaza', '09491040057', 'monmonplaza@gmail.com', '', 0, 0, '2024-04-03 12:59:27', '2024-04-03 12:59:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_client`
--
ALTER TABLE `glav1_client`
  ADD PRIMARY KEY (`client_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_client`
--
ALTER TABLE `glav1_client`
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
