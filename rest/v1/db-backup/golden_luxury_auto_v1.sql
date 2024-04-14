-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2024 at 05:45 PM
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
-- Table structure for table `glav1_car`
--

CREATE TABLE `glav1_car` (
  `car_aid` int(11) NOT NULL,
  `car_is_active` tinyint(1) NOT NULL,
  `car_photo` varchar(255) NOT NULL,
  `car_client_id` int(11) NOT NULL,
  `car_vehicle_make_id` int(11) NOT NULL,
  `car_year` int(11) NOT NULL,
  `car_specs` varchar(20) NOT NULL,
  `car_vin_number` varchar(50) NOT NULL,
  `car_plate_number` varchar(20) NOT NULL,
  `car_registration_date` varchar(20) NOT NULL,
  `car_gas` varchar(20) NOT NULL,
  `car_tire_size` varchar(20) NOT NULL,
  `car_oil_type` varchar(20) NOT NULL,
  `car_nada_retail` int(11) NOT NULL,
  `car_nada_clean` int(11) NOT NULL,
  `car_nada_average` int(11) NOT NULL,
  `car_nada_rough` int(11) NOT NULL,
  `car_miles` int(11) NOT NULL,
  `car_last_oil_change` varchar(20) NOT NULL,
  `car_turo_link` text NOT NULL,
  `car_admin_turo_link` text NOT NULL,
  `car_remarks` varchar(64) NOT NULL,
  `car_management` varchar(64) NOT NULL,
  `car_created` datetime NOT NULL,
  `car_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_car`
--

INSERT INTO `glav1_car` (`car_aid`, `car_is_active`, `car_photo`, `car_client_id`, `car_vehicle_make_id`, `car_year`, `car_specs`, `car_vin_number`, `car_plate_number`, `car_registration_date`, `car_gas`, `car_tire_size`, `car_oil_type`, `car_nada_retail`, `car_nada_clean`, `car_nada_average`, `car_nada_rough`, `car_miles`, `car_last_oil_change`, `car_turo_link`, `car_admin_turo_link`, `car_remarks`, `car_management`, `car_created`, `car_datetime`) VALUES
(4, 1, 'bf12lsxdskk8ycx1lhgnrg.2880x1400-768x373.jpg', 2, 1, 2020, 'MDX', '', '', '2024-04-11', '', '', '', 0, 0, 0, 0, 0, '2024-04-11', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/audi/q8/1945166', '', 'active', 'own', '2024-04-05 21:00:00', '2024-04-13 23:19:40'),
(5, 1, 'bf12lsxdskk8ycx1lhgnrg.2880x1400-768x373.jpg', 3, 3, 2022, 'Burgman', '', '', '', '', '', '', 0, 0, 0, 0, 0, '', '', '', 'client-has-the-car', 'client-has-the-car', '2024-04-13 23:20:29', '2024-04-13 23:20:29'),
(6, 1, 'bf12lsxdskk8ycx1lhgnrg.2880x1400-768x373.jpg', 3, 2, 2023, 'PSX', '', '', '', '', '', '', 0, 0, 0, 0, 0, '', '', '', '', '', '2024-04-13 23:20:48', '2024-04-13 23:20:48');

-- --------------------------------------------------------

--
-- Table structure for table `glav1_car_make`
--

CREATE TABLE `glav1_car_make` (
  `car_make_aid` int(11) NOT NULL,
  `car_make_is_active` tinyint(1) NOT NULL,
  `car_make_name` varchar(50) NOT NULL,
  `car_make_datetime` varchar(20) NOT NULL,
  `car_make_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_car_make`
--

INSERT INTO `glav1_car_make` (`car_make_aid`, `car_make_is_active`, `car_make_name`, `car_make_datetime`, `car_make_created`) VALUES
(1, 0, 'Acura', '2024-04-05 21:31:18', '2024-04-03 21:19:33'),
(2, 1, 'BMW', '2024-04-03 21:19:37', '2024-04-03 21:19:37'),
(3, 1, 'Cadillac', '2024-04-03 21:19:52', '2024-04-03 21:19:52'),
(4, 1, 'Chevrolet', '2024-04-03 21:20:04', '2024-04-03 21:20:04');

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
  `client_bank_routing_number` varchar(20) NOT NULL,
  `client_bank_account_number` varchar(20) NOT NULL,
  `client_created` datetime NOT NULL,
  `client_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_client`
--

INSERT INTO `glav1_client` (`client_aid`, `client_is_active`, `client_fname`, `client_lname`, `client_contact`, `client_email`, `client_bank_name`, `client_bank_routing_number`, `client_bank_account_number`, `client_created`, `client_datetime`) VALUES
(2, 1, 'Ivan', 'Adao', '09662993797', 'macdet21@gmail.com', 'China Bank Corp.', '010320013', '2147483647', '2024-04-03 12:58:49', '0000-00-00 00:00:00'),
(3, 1, 'Ramon', 'Plaza', '09491040057', 'monmonplaza@gmail.com', '', '0', '0', '2024-04-03 12:59:27', '2024-04-03 12:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `glav1_expenses`
--

CREATE TABLE `glav1_expenses` (
  `expenses_aid` int(11) NOT NULL,
  `expenses_is_active` tinyint(1) NOT NULL,
  `expenses_name` varchar(50) NOT NULL,
  `expenses_datetime` varchar(20) NOT NULL,
  `expenses_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_expenses`
--

INSERT INTO `glav1_expenses` (`expenses_aid`, `expenses_is_active`, `expenses_name`, `expenses_datetime`, `expenses_created`) VALUES
(1, 1, 'Car Cleaning', '2024-03-28 10:41:20', '2024-03-28 10:33:58'),
(3, 1, 'xxxxx3333', '2024-03-28 10:52:16', '2024-03-28 10:42:02'),
(4, 1, 'dfdfdf', '2024-03-28 10:52:19', '2024-03-28 10:52:19'),
(5, 1, 'sdsdsds', '2024-03-28 10:52:22', '2024-03-28 10:52:22'),
(6, 1, 'fdfdfdfdf', '2024-03-28 10:52:26', '2024-03-28 10:52:26'),
(7, 1, 'werwerwer', '2024-03-28 10:52:28', '2024-03-28 10:52:28'),
(8, 1, 'vvvvbv', '2024-03-28 10:52:31', '2024-03-28 10:52:31');

-- --------------------------------------------------------

--
-- Table structure for table `glav1_income_category`
--

CREATE TABLE `glav1_income_category` (
  `income_category_aid` int(11) NOT NULL,
  `income_category_is_active` tinyint(1) NOT NULL,
  `income_category_name` varchar(50) NOT NULL,
  `income_category_datetime` varchar(20) NOT NULL,
  `income_category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_income_category`
--

INSERT INTO `glav1_income_category` (`income_category_aid`, `income_category_is_active`, `income_category_name`, `income_category_datetime`, `income_category_created`) VALUES
(3, 1, 'cccc', '2024-03-29 08:15:19', '2024-03-28 21:07:59'),
(4, 1, 'test', '2024-03-29 08:39:13', '2024-03-28 22:32:23');

-- --------------------------------------------------------

--
-- Table structure for table `glav1_income_item`
--

CREATE TABLE `glav1_income_item` (
  `income_item_aid` int(11) NOT NULL,
  `income_item_is_active` tinyint(1) NOT NULL,
  `income_item_name` varchar(20) NOT NULL,
  `income_item_category_id` int(11) NOT NULL,
  `income_item_created` varchar(20) NOT NULL,
  `income_item_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_income_item`
--

INSERT INTO `glav1_income_item` (`income_item_aid`, `income_item_is_active`, `income_item_name`, `income_item_category_id`, `income_item_created`, `income_item_datetime`) VALUES
(5, 1, 'qqq', 4, '2024-03-29 08:38:13', '2024-03-29 08:38:13');

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
-- Table structure for table `glav1_quicklinks`
--

CREATE TABLE `glav1_quicklinks` (
  `quicklink_aid` int(11) NOT NULL,
  `quicklink_is_active` tinyint(1) NOT NULL,
  `quicklink_name` varchar(50) NOT NULL,
  `quicklink_link` text NOT NULL,
  `quicklink_is_social` tinyint(1) NOT NULL,
  `quicklink_social_media` varchar(50) NOT NULL,
  `quicklink_order` int(11) NOT NULL,
  `quicklink_created` varchar(20) NOT NULL,
  `quicklink_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_quicklinks`
--

INSERT INTO `glav1_quicklinks` (`quicklink_aid`, `quicklink_is_active`, `quicklink_name`, `quicklink_link`, `quicklink_is_social`, `quicklink_social_media`, `quicklink_order`, `quicklink_created`, `quicklink_datetime`) VALUES
(1, 1, 'Facebook', 'https://www.facebook.com/Goldenluxuryauto/', 1, 'facebook', 0, '2024-04-11 20:17:35', '2024-04-11 20:42:00'),
(2, 1, 'Instagram', 'https://www.instagram.com/goldenluxuryauto/?hl=en', 1, 'instagram', 0, '2024-04-11 20:19:24', '2024-04-11 20:42:10'),
(3, 1, 'LinkedIn', 'https://www.linkedin.com/company/gla-rentals/', 1, 'linkedin', 0, '2024-04-11 20:20:13', '2024-04-11 20:43:32'),
(4, 1, 'My Profile', 'http://localhost:5173/developer/account', 0, 'other', 0, '2024-04-11 20:22:01', '2024-04-11 20:23:04'),
(5, 1, 'Schedule a Zoom Call', 'https://rent.goldenluxuryauto.com/lyc-client-check-in', 0, 'other', 0, '2024-04-11 20:23:31', '2024-04-11 20:23:31'),
(6, 1, 'List Another Car', 'https://docs.google.com/forms/d/e/1FAIpQLSdJKQCpQEDbhawpyRwZq4ZWCuJXAwJ8Eine5FebIsGeENc6Mg/viewform', 0, 'other', 0, '2024-04-11 20:23:47', '2024-04-11 20:24:01'),
(7, 1, 'Book Your Car', 'https://rent.goldenluxuryauto.com/start-block', 0, 'other', 0, '2024-04-11 20:25:00', '2024-04-11 20:25:00'),
(8, 1, 'Parking & Toll Tickets', 'https://forms.gle/X8RCN18vbqRycoUq5', 0, 'other', 0, '2024-04-11 20:25:20', '2024-04-11 20:25:20'),
(9, 1, 'License & Registration or Insurance Updates', 'https://forms.gle/SPci4zhUX7BMgyfu9', 0, 'other', 0, '2024-04-11 20:25:55', '2024-04-11 20:25:55'),
(10, 1, 'Refer Somebody', 'https://forms.gle/dku7b49PiKe2tvw16', 0, 'other', 0, '2024-04-11 20:26:14', '2024-04-11 20:26:14'),
(11, 1, 'Client Experience', 'https://www.goldenluxuryauto.com/my-account/car-details/#', 0, 'other', 0, '2024-04-11 20:27:32', '2024-04-11 20:27:32'),
(12, 1, 'Turo Apps Tips Video ', 'https://www.goldenluxuryauto.com/my-account/car-details/#', 0, 'other', 0, '2024-04-11 20:28:51', '2024-04-11 20:28:51'),
(13, 1, 'Schedule a Car Detailing', 'https://www.goldenluxuryauto.com/detail-shop', 0, 'other', 0, '2024-04-11 20:29:11', '2024-04-11 20:29:11'),
(14, 1, 'View my Car', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/acura/mdx/1268206', 0, 'other', 0, '2024-04-11 20:30:09', '2024-04-11 20:30:09'),
(15, 1, 'Pinterest', 'https://www.pinterest.com/goldenluxuryauto/', 1, 'pinterest', 0, '2024-04-11 20:42:35', '2024-04-11 20:42:35'),
(16, 1, 'Yelp', 'https://www.yelp.com/biz/golden-luxury-auto-salt-lake-city', 1, 'yelp', 0, '2024-04-11 20:42:50', '2024-04-11 20:43:14');

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

-- --------------------------------------------------------

--
-- Table structure for table `glav1_representatives`
--

CREATE TABLE `glav1_representatives` (
  `representatives_aid` int(11) NOT NULL,
  `representatives_is_active` tinyint(1) NOT NULL,
  `representatives_fname` varchar(50) NOT NULL,
  `representatives_lname` varchar(50) NOT NULL,
  `representatives_email` varchar(100) NOT NULL,
  `representatives_datetime` varchar(20) NOT NULL,
  `representatives_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_representatives`
--

INSERT INTO `glav1_representatives` (`representatives_aid`, `representatives_is_active`, `representatives_fname`, `representatives_lname`, `representatives_email`, `representatives_datetime`, `representatives_created`) VALUES
(1, 1, 'd', 'dsds', 'dsd@asd.ciom', '2024-03-28 14:07:02', '2024-03-28 14:07:02');

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
  `role_is_admin` tinyint(1) NOT NULL,
  `role_is_client` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_roles`
--

INSERT INTO `glav1_roles` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`, `role_is_client`) VALUES
(1, 1, 'Developer', 'Developer', '2024-03-26 00:19:39', '0000-00-00 00:00:00', 1, 0, 0),
(2, 1, 'Admin', 'Admin', '2024-03-26 00:22:11', '2024-03-26 00:22:11', 0, 1, 0),
(4, 1, 'Client', 'Client', '2024-04-06 21:37:05', '2024-04-06 21:37:05', 0, 0, 1);

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
(2, 1, 'Mac', 'Merin', 'macmerin24@gmail.com', '', '2', '', '$2y$10$rafVF0tPZV71HhGPNc.oguaEKDE8Ech/mZ5GYVjPEvH.eIrOpOLxa', '2024-04-05 19:59:14', '2024-04-05 20:01:02'),
(3, 1, 'Mac', 'Mac', 'merin.ryanmark@gmail.com', '', '2', '', '$2y$10$v9bLuieYO.QXvHzKCX9Ms.g70KwTNXAfeW0eHaQuxxr1CUxZzaT1W', '2024-04-05 21:03:14', '2024-04-05 21:04:15'),
(5, 1, 'Ivan', 'Adao', 'macdet21@gmail.com', '', '4', '', '$2y$10$R1TsLnOpsITwEBe0ZoC2tOjv24XXLt7dxqfB.dQW6g5kKVJxLcdT6', '2024-04-06 23:11:27', '2024-04-07 11:13:22');

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
-- Indexes for table `glav1_car`
--
ALTER TABLE `glav1_car`
  ADD PRIMARY KEY (`car_aid`);

--
-- Indexes for table `glav1_car_make`
--
ALTER TABLE `glav1_car_make`
  ADD PRIMARY KEY (`car_make_aid`);

--
-- Indexes for table `glav1_client`
--
ALTER TABLE `glav1_client`
  ADD PRIMARY KEY (`client_aid`);

--
-- Indexes for table `glav1_expenses`
--
ALTER TABLE `glav1_expenses`
  ADD PRIMARY KEY (`expenses_aid`);

--
-- Indexes for table `glav1_income_category`
--
ALTER TABLE `glav1_income_category`
  ADD PRIMARY KEY (`income_category_aid`);

--
-- Indexes for table `glav1_income_item`
--
ALTER TABLE `glav1_income_item`
  ADD PRIMARY KEY (`income_item_aid`);

--
-- Indexes for table `glav1_maintenance`
--
ALTER TABLE `glav1_maintenance`
  ADD PRIMARY KEY (`maintenance_aid`);

--
-- Indexes for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  ADD PRIMARY KEY (`quicklink_aid`);

--
-- Indexes for table `glav1_record_files`
--
ALTER TABLE `glav1_record_files`
  ADD PRIMARY KEY (`record_files_aid`);

--
-- Indexes for table `glav1_representatives`
--
ALTER TABLE `glav1_representatives`
  ADD PRIMARY KEY (`representatives_aid`);

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
-- AUTO_INCREMENT for table `glav1_car`
--
ALTER TABLE `glav1_car`
  MODIFY `car_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `glav1_car_make`
--
ALTER TABLE `glav1_car_make`
  MODIFY `car_make_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `glav1_client`
--
ALTER TABLE `glav1_client`
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `glav1_expenses`
--
ALTER TABLE `glav1_expenses`
  MODIFY `expenses_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `glav1_income_category`
--
ALTER TABLE `glav1_income_category`
  MODIFY `income_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `glav1_income_item`
--
ALTER TABLE `glav1_income_item`
  MODIFY `income_item_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `glav1_maintenance`
--
ALTER TABLE `glav1_maintenance`
  MODIFY `maintenance_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  MODIFY `quicklink_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `glav1_record_files`
--
ALTER TABLE `glav1_record_files`
  MODIFY `record_files_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `glav1_representatives`
--
ALTER TABLE `glav1_representatives`
  MODIFY `representatives_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `glav1_roles`
--
ALTER TABLE `glav1_roles`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `glav1_user_other`
--
ALTER TABLE `glav1_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `glav1_user_system`
--
ALTER TABLE `glav1_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
