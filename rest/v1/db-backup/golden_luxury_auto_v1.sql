-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2024 at 05:32 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `glav1_roles`
--

CREATE TABLE `glav1_roles` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(20) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_roles`
--

INSERT INTO `glav1_roles` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`) VALUES
(1, 1, 'Developer', 'Developer', '2024-03-26 00:19:39', '2024-03-26 00:21:54', 1, 0),
(2, 1, 'Admin', 'Admin', '2024-03-26 00:22:11', '2024-03-26 00:22:11', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `glav1_user_other`
--

CREATE TABLE `glav1_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_id` varchar(20) NOT NULL,
  `user_other_name` varchar(128) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` varchar(20) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `glav1_user_system`
--

CREATE TABLE `glav1_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(50) NOT NULL,
  `user_system_lname` varchar(50) NOT NULL,
  `user_system_email` varchar(128) NOT NULL,
  `user_system_new_email` varchar(128) NOT NULL,
  `user_system_role_id` varchar(20) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_user_system`
--

INSERT INTO `glav1_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_new_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', '', '1', '', '$2y$10$rxJ3MZ0EAhc3IGW3SgoSgeL7jopaimac5vTiJUAfHHKrnb60m3TS2', '2024-03-26 00:29:49', '2024-03-26 00:32:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_roles`
--
ALTER TABLE `glav1_roles`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `glav1_user_other`
--
ALTER TABLE `glav1_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- Indexes for table `glav1_user_system`
--
ALTER TABLE `glav1_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_roles`
--
ALTER TABLE `glav1_roles`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `glav1_user_other`
--
ALTER TABLE `glav1_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `glav1_user_system`
--
ALTER TABLE `glav1_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
