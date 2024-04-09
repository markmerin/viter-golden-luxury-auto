-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2024 at 06:09 AM
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
-- Table structure for table `glav1_record_files`
--

CREATE TABLE `glav1_record_files` (
  `record_files_aid` int(11) NOT NULL,
  `record_files_is_active` tinyint(1) NOT NULL,
  `record_files_doc_name` varchar(50) NOT NULL,
  `record_files_date` varchar(20) NOT NULL,
  `record_files_remarks` text NOT NULL,
  `record_files_gdrive` text NOT NULL,
  `record_files_client_id` int(11) NOT NULL,
  `record_files_datetime` varchar(20) NOT NULL,
  `record_files_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_record_files`
--

INSERT INTO `glav1_record_files` (`record_files_aid`, `record_files_is_active`, `record_files_doc_name`, `record_files_date`, `record_files_remarks`, `record_files_gdrive`, `record_files_client_id`, `record_files_datetime`, `record_files_created`) VALUES
(2, 1, '123ertertert', '2024-04-21', 'zxczxczxczx', '', 2, '2024-04-05 23:53:09', '2024-04-05 23:31:17'),
(3, 1, 'bbbtyutyut', '2024-04-02', 'bbb', '', 2, '2024-04-06 00:04:31', '2024-04-05 23:32:09'),
(4, 1, 'bbbx', '2024-04-10', 'asdasd', '', 2, '', '2024-04-05 23:50:02'),
(5, 1, 'test', '2024-04-11', 'testset', 'https://drive.google.com/file/d/1apmhx10kw52ePQNwISkFwNk_ww-zh-4E/view?usp=sharingxxx', 2, '', '2024-04-09 11:00:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_record_files`
--
ALTER TABLE `glav1_record_files`
  ADD PRIMARY KEY (`record_files_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_record_files`
--
ALTER TABLE `glav1_record_files`
  MODIFY `record_files_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
