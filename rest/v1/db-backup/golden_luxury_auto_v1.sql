-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 05:42 PM
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
-- Table structure for table `glav1_maintenance`
--

CREATE TABLE `glav1_maintenance` (
  `maintenance_aid` int(11) NOT NULL,
  `maintenance_is_for_client` tinyint(1) NOT NULL,
  `maintenance_is_for_admin` tinyint(1) NOT NULL,
  `maintenance_created` datetime NOT NULL,
  `maintenance_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_maintenance`
--

INSERT INTO `glav1_maintenance` (`maintenance_aid`, `maintenance_is_for_client`, `maintenance_is_for_admin`, `maintenance_created`, `maintenance_datetime`) VALUES
(1, 1, 0, '2024-03-27 00:39:23', '2024-03-27 00:39:23');

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
(1, 1, 'Developer', 'Developer', '2024-03-26 00:19:39', '0000-00-00 00:00:00', 1, 0),
(2, 1, 'Admin', 'Admin', '2024-03-26 00:22:11', '2024-03-26 00:22:11', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `glav1_user_other`
--

CREATE TABLE `glav1_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(128) NOT NULL,
  `user_other_lname` varchar(128) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` varchar(20) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_user_other`
--

INSERT INTO `glav1_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(1, 1, 'Mark', 'Ryan', 'macmerin24@gmail.com', '', '2', '', '$2y$10$4VKWFguX8BSQ98Iub7gSiuvdfuGL.C/s2E4IsQ/Vnoe38T5J2Zk5a', '2024-03-26 21:13:33', '0000-00-00 00:00:00');

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
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', '', '1', '', '$2y$10$ba/3FB/rwVxWYGOErDv6wehWCfSjd1ZgpHPvTnA2F7KCi.4xe4/bG', '2024-03-26 00:29:49', '0000-00-00 00:00:00'),
(2, 1, 'Mac', 'Merin', 'macmerin24@gmail.com', '', '1', '', '$2y$10$MiS46dj.YiEwuwmTjJUbUuMYlmeg04c/VxP.7QLOkf0FF7kk4Of.W', '2024-03-26 20:16:05', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_maintenance`
--
ALTER TABLE `glav1_maintenance`
  ADD PRIMARY KEY (`maintenance_aid`);

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
-- AUTO_INCREMENT for table `glav1_maintenance`
--
ALTER TABLE `glav1_maintenance`
  MODIFY `maintenance_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `glav1_roles`
--
ALTER TABLE `glav1_roles`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `glav1_user_other`
--
ALTER TABLE `glav1_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `glav1_user_system`
--
ALTER TABLE `glav1_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
