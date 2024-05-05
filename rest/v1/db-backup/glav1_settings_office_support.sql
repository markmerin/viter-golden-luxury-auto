-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 06:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `glav1_settings_office_support`
--

CREATE TABLE `glav1_settings_office_support` (
  `office_support_aid` int(11) NOT NULL,
  `office_support_name` varchar(128) NOT NULL,
  `office_support_is_active` tinyint(1) NOT NULL,
  `office_support_created` datetime NOT NULL,
  `office_support_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `glav1_settings_office_support`
--

INSERT INTO `glav1_settings_office_support` (`office_support_aid`, `office_support_name`, `office_support_is_active`, `office_support_created`, `office_support_datetime`) VALUES
(1, 'Accounting & Professional Fees', 1, '2024-05-04 23:18:52', '2024-05-04 23:18:52'),
(2, 'Advertizing', 1, '2024-05-04 23:18:58', '2024-05-04 23:18:58'),
(3, 'Bank Charges', 1, '2024-05-04 23:19:02', '2024-05-04 23:19:02'),
(4, 'Detail Mobile', 1, '2024-05-04 23:19:07', '2024-05-04 23:19:07'),
(5, 'Computer & Internet', 1, '2024-05-04 23:19:11', '2024-05-04 23:19:11'),
(6, 'Detail Shop Equipment', 1, '2024-05-04 23:19:15', '2024-05-04 23:19:15'),
(7, 'Dues & Subscription', 1, '2024-05-04 23:20:06', '2024-05-04 23:20:06'),
(8, 'General and administrative (G&A)', 1, '2024-05-04 23:20:11', '2024-05-04 23:20:11'),
(9, 'Health & Wellness', 1, '2024-05-04 23:20:15', '2024-05-04 23:20:15'),
(10, 'Labor Sales', 1, '2024-05-04 23:20:19', '2024-05-04 23:20:19'),
(11, 'Labor Software', 1, '2024-05-04 23:20:25', '2024-05-04 23:20:25'),
(12, 'Marketing', 1, '2024-05-04 23:20:31', '2024-05-04 23:20:31'),
(13, 'Meals & Entertainment', 1, '2024-05-04 23:20:35', '2024-05-04 23:20:35'),
(14, 'Office Expense', 1, '2024-05-04 23:20:39', '2024-05-04 23:20:39'),
(15, 'Office Rent', 1, '2024-05-04 23:20:43', '2024-05-04 23:20:43'),
(16, 'Park n Jet Booth', 1, '2024-05-04 23:20:47', '2024-05-04 23:20:47'),
(17, 'Printing', 1, '2024-05-04 23:20:53', '2024-05-04 23:20:53'),
(18, 'Referral', 1, '2024-05-04 23:20:58', '2024-05-04 23:20:58'),
(19, 'Repairs & Maintenance', 1, '2024-05-04 23:21:02', '2024-05-04 23:21:02'),
(20, 'Sales Tax', 1, '2024-05-04 23:21:06', '2024-05-04 23:21:06'),
(21, 'Security Cameras', 1, '2024-05-04 23:21:11', '2024-05-04 23:21:11'),
(22, 'Shipping, Freight & Delivery', 1, '2024-05-04 23:21:15', '2024-05-04 23:21:15'),
(23, 'Supplies & Materials', 1, '2024-05-04 23:21:20', '2024-05-04 23:21:20'),
(24, 'Taxes and License', 1, '2024-05-04 23:21:35', '2024-05-04 23:21:35'),
(25, 'Telephone', 1, '2024-05-04 23:21:39', '2024-05-04 23:21:39'),
(26, 'Travel', 1, '2024-05-04 23:21:45', '2024-05-04 23:21:45'),
(27, 'Depreciation Expense', 1, '2024-05-04 23:21:50', '2024-05-04 23:21:50'),
(28, 'Vehicle Depreciation Expense', 1, '2024-05-04 23:21:54', '2024-05-04 23:21:54'),
(29, 'Vehicle Loan Interest Expense', 1, '2024-05-04 23:22:00', '2024-05-04 23:22:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_settings_office_support`
--
ALTER TABLE `glav1_settings_office_support`
  ADD PRIMARY KEY (`office_support_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_settings_office_support`
--
ALTER TABLE `glav1_settings_office_support`
  MODIFY `office_support_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
