-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 02:49 AM
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
  `car_last_nada_retail` int(11) NOT NULL,
  `car_last_nada_clean` int(11) NOT NULL,
  `car_last_nada_average` int(11) NOT NULL,
  `car_last_nada_rough` int(11) NOT NULL,
  `car_miles` int(11) NOT NULL,
  `car_last_oil_change` varchar(20) NOT NULL,
  `car_turo_link` text NOT NULL,
  `car_admin_turo_link` text NOT NULL,
  `car_remarks` varchar(50) NOT NULL,
  `car_management` varchar(50) NOT NULL,
  `car_created` datetime NOT NULL,
  `car_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_car`
--

INSERT INTO `glav1_car` (`car_aid`, `car_is_active`, `car_photo`, `car_client_id`, `car_vehicle_make_id`, `car_year`, `car_specs`, `car_vin_number`, `car_plate_number`, `car_registration_date`, `car_gas`, `car_tire_size`, `car_oil_type`, `car_nada_retail`, `car_nada_clean`, `car_nada_average`, `car_nada_rough`, `car_last_nada_retail`, `car_last_nada_clean`, `car_last_nada_average`, `car_last_nada_rough`, `car_miles`, `car_last_oil_change`, `car_turo_link`, `car_admin_turo_link`, `car_remarks`, `car_management`, `car_created`, `car_datetime`) VALUES
(12, 1, '', 2, 1, 2020, 'MDX', '5J8YD4H37LL042022', 'CF90734', '2024-04', 'Premium', 'P265/45R20', '0W-20', 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/audi/q7/2555258\n', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/audi/q7/2555258\n', '', '', '2024-04-04 10:05:28', '2024-04-12 16:00:07'),
(13, 1, 'aldgjxdjsgw3mt0qmxsvvq.1440x700-1024x498.webp', 2, 3, 2018, 'Escalade ESV', '1GYS4JKJ0JR130246', 'G129PE', '2023-10', 'Premium', 'P275/50R21', '0W-20', 30998, 27775, 25850, 23550, 0, 0, 0, 0, 122430, '2023-10-10', '', '', '', '', '2024-04-04 10:09:58', '2024-04-12 15:54:31'),
(14, 1, '', 2, 2, 2018, 'x2', 'WBXYJ5C33JEF73360', 'CG57789', '2023-11', 'Premium', 'P225/50R18', '0W20', 23550, 20700, 19050, 17075, 0, 0, 0, 0, 63835, '2020-03-04', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/audi/q8/1945166', '', '', '', '2024-04-04 10:34:57', '2024-04-12 15:53:53'),
(15, 1, '', 3, 2, 2019, 'x6', '5UXKU2C57K0Z63897', 'G108NE', '2023-11', 'Premium', 'P275/50R22', '0W30', 35795, 32750, 30800, 28475, 0, 4321, 0, 0, 73115, '2022-03-03', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/bmw/x2/1276618', '', '', '', '2024-04-04 13:56:56', '2024-04-16 08:45:56'),
(16, 1, 'cadillac-escalade-2018-130246-2-qk054irj8k6fp4d06g5de37ahdm3gz7hokk3uyj434.webp', 3, 4, 2020, 'Tahoe', '5J8YD4H37LL042020', 'CF90734', '2024-04', 'Premium', '', '', 1234, 0, 0, 0, 3213, 0, 0, 0, 0, '', 'https://turo.com/us/en/suv-rental/united-states/salt-lake-city-ut/buick/enclave/2050065', '', '', '', '2024-04-04 15:01:08', '2024-04-16 08:47:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car`
--
ALTER TABLE `glav1_car`
  ADD PRIMARY KEY (`car_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car`
--
ALTER TABLE `glav1_car`
  MODIFY `car_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
