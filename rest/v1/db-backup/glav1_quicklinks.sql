-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2024 at 03:53 AM
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
-- Table structure for table `glav1_quicklinks`
--

CREATE TABLE `glav1_quicklinks` (
  `quicklink_aid` int(11) NOT NULL,
  `quicklink_is_active` tinyint(1) NOT NULL,
  `quicklink_name` varchar(50) NOT NULL,
  `quicklink_link` text NOT NULL,
  `quicklink_is_social` tinyint(1) NOT NULL,
  `quicklink_social_media` varchar(50) NOT NULL,
  `quicklink_created` varchar(20) NOT NULL,
  `quicklink_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_quicklinks`
--

INSERT INTO `glav1_quicklinks` (`quicklink_aid`, `quicklink_is_active`, `quicklink_name`, `quicklink_link`, `quicklink_is_social`, `quicklink_social_media`, `quicklink_created`, `quicklink_datetime`) VALUES
(1, 1, 'My Account', 'http://127.0.0.1:5173/admin/account', 0, 'other', '2024-04-12 09:14:00', '2024-04-12 09:14:00'),
(2, 1, 'Schedule a Zoom Call', 'https://rent.goldenluxuryauto.com/lyc-client-check-in', 0, 'other', '2024-04-12 09:19:48', ''),
(3, 1, 'List Another Car', 'https://docs.google.com/forms/d/e/1FAIpQLSdJKQCpQEDbhawpyRwZq4ZWCuJXAwJ8Eine5FebIsGeENc6Mg/viewform', 0, 'other', '2024-04-12 09:34:08', '2024-04-12 09:34:08'),
(4, 1, 'Book Your Car', 'https://rent.goldenluxuryauto.com/start-block', 0, 'other', '2024-04-12 09:34:28', '2024-04-12 09:34:28'),
(5, 1, 'Parking & Toll Tickets', 'https://forms.gle/X8RCN18vbqRycoUq5', 0, 'other', '2024-04-12 09:35:34', '2024-04-12 09:35:34'),
(6, 1, 'License & Registration or Insurance Updates', 'https://forms.gle/SPci4zhUX7BMgyfu9', 0, 'other', '2024-04-12 09:35:46', '2024-04-12 09:35:46'),
(7, 1, 'Refer Somebody', 'https://forms.gle/dku7b49PiKe2tvw16', 0, 'other', '2024-04-12 09:36:05', '2024-04-12 09:36:05'),
(8, 1, 'Client Experience', 'https://www.goldenluxuryauto.com/my-account/car-details/#', 0, 'other', '2024-04-12 09:36:18', '2024-04-12 09:36:18'),
(9, 1, 'Turo Apps Tips Video', 'https://www.goldenluxuryauto.com/my-account/car-details/#', 0, 'other', '2024-04-12 09:36:31', '2024-04-12 09:36:31'),
(10, 1, 'Schedule a Car Detailing', 'https://www.goldenluxuryauto.com/detail-shop', 0, 'other', '2024-04-12 09:36:43', '2024-04-12 09:36:43'),
(11, 1, 'View My Car', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/acura/mdx/1268206', 0, 'other', '2024-04-12 09:36:55', '2024-04-12 09:36:55'),
(12, 1, 'Facebook', 'https://www.facebook.com/Goldenluxuryauto/', 1, 'facebook', '2024-04-12 09:37:11', '2024-04-12 09:37:11'),
(13, 1, 'Instagram', 'https://www.instagram.com/goldenluxuryauto/?hl=en', 1, 'instagram', '2024-04-12 09:37:21', '2024-04-12 09:37:21'),
(14, 1, 'Pinterest', 'https://www.pinterest.com/goldenluxuryauto/', 1, 'pinterest', '2024-04-12 09:37:35', '2024-04-12 09:37:35'),
(15, 1, 'Yelp', 'https://www.yelp.com/biz/golden-luxury-auto-salt-lake-city', 1, 'yelp', '2024-04-12 09:37:48', '2024-04-12 09:37:48'),
(16, 1, 'LinkedIn', 'https://www.linkedin.com/company/gla-rentals/', 1, 'linkedin', '2024-04-12 09:38:01', '2024-04-12 09:38:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  ADD PRIMARY KEY (`quicklink_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  MODIFY `quicklink_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
