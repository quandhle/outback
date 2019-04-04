-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 04, 2019 at 08:40 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `base_data`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `test_multi_sets` ()  begin
        select user() as first_col;
        select user() as first_col, now() as second_col;
        select user() as first_col, now() as second_col, now() as third_col;
        end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `ID` mediumint(8) UNSIGNED NOT NULL,
  `given_name` varchar(30) NOT NULL,
  `family_name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(64) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`ID`, `given_name`, `family_name`, `email`, `password`, `status`) VALUES
(1, 'Chuck', 'Tomai', 'somedude@someserver.com', '06cf73d585b182a85d0270a5ebb9f3768ebfbe18', 1),
(2, 'Jane', 'Doe', 'somewhere@overtherainbow.com', '48a3218fa3bacb1d5d1cdb56ae2d7f7808d4a036', 1),
(3, 'Stan', 'TheMan', 'superawesome@cantstopwontstop.com', 'd8e9031e962f8a22a7443c1748960090e85ad6c3', 1),
(4, 'Tabula', 'Rasa', 'failedmmo@sadpanda.com', 'f2b8e82e40773a667ebcabc658a0b6d3b8b9974b', 1);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` float NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL,
  `type` enum('shoes','shirt','pants') NOT NULL,
  `added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`ID`, `name`, `price`, `status`, `type`, `added`) VALUES
(1, 'hiking boots', 19.99, 1, 'shoes', '2016-03-15 12:14:23'),
(2, 'dress shoes', 35.99, 1, 'shoes', '2016-03-15 12:14:23'),
(3, 'dinner shoes', 129.99, 1, 'shoes', '2016-03-15 14:27:53'),
(4, 'dinner pants', 40, 1, 'pants', '2016-03-15 14:27:53'),
(5, 'dress pants', 48, 1, 'pants', '2016-03-15 14:27:53'),
(6, 'flower pants', 22.3, 1, 'pants', '2016-03-15 14:27:53'),
(7, 'short pants', 15.99, 1, 'pants', '2016-03-15 14:27:53'),
(8, 'hawaiiain shirt', 9.99, 1, 'shirt', '2016-03-15 14:29:22'),
(9, 'dress shirt', 22.32, 1, 'shirt', '2016-03-15 14:29:22'),
(10, 'chiffon shirt', 12.5, 1, 'shirt', '2016-03-15 14:29:22'),
(11, 't-shirt', 11.59, 1, 'shirt', '2016-03-15 14:29:22'),
(12, 'polo shirt', 15.66, 1, 'shirt', '2016-03-15 14:29:22');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `item_id` mediumint(8) UNSIGNED NOT NULL,
  `customers_id` mediumint(8) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `item_count` int(10) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`ID`, `item_id`, `customers_id`, `price`, `item_count`, `added`, `status`) VALUES
(1, 10, 1, 37.5, 3, '2016-03-22 09:00:00', 1),
(2, 9, 1, 156.24, 7, '2016-03-14 05:00:00', 1),
(3, 6, 1, 44.6, 2, '2016-02-15 19:00:00', 1),
(4, 11, 2, 69.54, 6, '2016-04-08 22:00:00', 1),
(5, 2, 2, 143.96, 4, '2016-03-24 03:00:00', 1),
(6, 9, 2, 223.2, 10, '2016-03-16 02:00:00', 1),
(7, 8, 2, 69.93, 7, '2016-04-20 12:00:00', 1),
(8, 6, 2, 89.2, 4, '2016-02-06 19:00:00', 1),
(9, 11, 3, 69.54, 6, '2016-03-30 07:00:00', 1),
(10, 5, 3, 384, 8, '2016-03-13 21:00:00', 1),
(11, 8, 3, 49.95, 5, '2016-02-15 02:00:00', 1),
(12, 3, 3, 1299.9, 10, '2016-04-21 09:00:00', 1),
(13, 6, 3, 89.2, 4, '2016-02-13 03:00:00', 1),
(14, 7, 3, 159.9, 10, '2016-01-18 01:00:00', 1),
(15, 9, 3, 66.96, 3, '2016-04-10 05:00:00', 1),
(16, 2, 3, 71.98, 2, '2016-02-20 06:00:00', 1),
(17, 9, 4, 66.96, 3, '2016-02-23 14:00:00', 1),
(18, 3, 4, 779.94, 6, '2016-01-14 08:00:00', 1),
(19, 4, 4, 40, 1, '2016-04-12 16:00:00', 1),
(20, 8, 4, 89.91, 9, '2016-02-20 12:00:00', 1),
(21, 5, 4, 144, 3, '2016-04-05 14:00:00', 1),
(22, 7, 4, 47.97, 3, '2016-03-22 22:00:00', 1),
(23, 12, 4, 93.96, 6, '2016-01-01 01:00:00', 1),
(24, 2, 4, 215.94, 6, '2016-01-18 03:00:00', 1),
(25, 9, 4, 200.88, 9, '2016-04-27 08:00:00', 1),
(26, 11, 4, 115.9, 10, '2016-02-12 13:00:00', 1),
(27, 6, 4, 178.4, 8, '2016-03-19 07:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `ID` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
