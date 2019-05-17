-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 17, 2019 at 09:09 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `outback`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `item_count` mediumint(8) UNSIGNED NOT NULL,
  `total_price` bigint(20) UNSIGNED NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `changed` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `cart_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `cart_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(10) UNSIGNED NOT NULL,
  `company_name` varchar(20) NOT NULL,
  `website` varchar(100) NOT NULL,
  `number` bigint(20) UNSIGNED DEFAULT NULL,
  `headquarter` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `website`, `number`, `headquarter`) VALUES
(1, 'Arc\'teryx', 'https://arcteryx.com/us/en/', 18664582473, 'North Vancouver, Canada'),
(2, 'Patagonia', 'https://www.patagonia.com/home/', 18006386464, 'Ventura, CA'),
(3, 'Columbia', 'https://www.columbia.com/', 18006226953, 'Portland, OR'),
(4, 'Black Diamond', 'http://www.blackdiamondequipment.com/', 18012785533, 'Salt Lake City, UT'),
(5, 'La Sportiva', 'https://www.sportiva.com/', 13034438710, 'Boulder, Colorado'),
(6, 'Organic', 'https://organicclimbing.com/', NULL, ''),
(7, 'Camp USA', 'https://www.camp-usa.com/', 13034659429, 'Golden, CO'),
(8, 'Petzl', 'https://www.petzl.com/US/en', 18019261500, 'Crolles, France');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `url`) VALUES
(1, 1, 'https://www.sportiva.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/0/20h_000203_solutionwomens_whitelilyorange_1_2.jpg'),
(2, 1, 'https://www.bfgcdn.com/1500_1500_90/301-0455-0111/la-sportiva-womens-solution-climbing-shoes.jpg'),
(3, 1, 'https://cdn.shopify.com/s/files/1/1933/1869/products/ls-w-solu-wlo2_2000x.jpg?v=1526691096'),
(4, 1, 'https://cdn.shopify.com/s/files/1/1554/2851/products/la_spotiva_solution_women_4_800x.jpg?v=1530700302'),
(5, 2, 'https://content.backcountry.com/images/items/1200/ARC/ARC00UV/TUI.jpg'),
(6, 3, 'https://www.climbing.com/.image/t_share/MTM3OTQ2NjY0NTA4ODYwMjY4/organicpadjpg.jpg'),
(7, 3, 'https://static1.squarespace.com/static/55fee5e1e4b08aa6c7f5ee4f/t/583ffdbfbe6594419e35c618/1482048191744/organic_climbing_simple_pad_bouldering_problemsolver'),
(8, 4, 'https://cdn.shopify.com/s/files/1/1554/2851/products/organic_lunchbag_1_2000x.jpg?v=1506885287'),
(9, 4, 'https://cdn.shopify.com/s/files/1/0581/7001/products/lunchbag_chalk_bucket.jpg?v=1418053265'),
(10, 4, 'https://cdn.shopify.com/s/files/1/0581/7001/products/untitledNov201497535.jpg?v=1418053265'),
(11, 5, 'https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/16/83/289847_4159_L2.jpg'),
(12, 6, 'https://www.petzl.com/sfc/servlet.shepherd/version/download/0681r0000078LBEAA2'),
(13, 6, 'https://www.petzl.com/sfc/servlet.shepherd/version/download/0681r0000078LBEAA2'),
(14, 7, 'https://content.backcountry.com/images/items/900/PTZ/PTZ008X/S12CM.jpg'),
(15, 8, 'https://content.backcountry.com/images/items/900/TNF/TNF2660/MDGWB.jpg'),
(16, 9, 'https://content.backcountry.com/images/items/900/KEL/KEL00B2/ONECOL.jpg'),
(17, 9, 'https://smhttp-ssl-40823.nexcesscdn.net/media/catalog/product/cache/1/image/519x410/9df78eab33525d08d6e5fb8d27136e95/k/e/kelty-late-start-2p.jpg'),
(18, 10, 'https://content.backcountry.com/images/items/900/ARC/ARC009S/RDBEA.jpg'),
(19, 10, 'https://content.backcountry.com/images/items/1200/ARC/ARC009S/RDBEA_D6.jpg'),
(20, 11, 'https://content.backcountry.com/images/items/1200/ARC/ARC009R/POS.jpg'),
(21, 11, 'https://content.backcountry.com/images/items/1200/ARC/ARC009R/POS_D1.jpg'),
(22, 12, 'https://www.osprey.com/images/product/hero/aetheragdpk60_side_outbackorange.jpg'),
(23, 12, 'https://mountainsforeverybody.com/wp-content/uploads/2017/02/Osprey-Aether-AG-60-review-hipbelt-removed.jpg'),
(24, 13, 'https://www.osprey.com/images/product/hero/hydraulicsreservoir3l_s16_side.jpg'),
(25, 13, 'https://www.osprey.com/images/product/hero/hydraulicsreservoir3l_s16_back_blue.jpg'),
(26, 14, 'https://www.bananafingers.co.uk/sites/default/files/styles/product_gallery_full/public/product-images/safety-equipment/d014ba02-grigri_lowres.jpg?itok=UnLQYtFX'),
(27, 14, 'https://www.trekkinn.com/f/128/1283633_2/petzl-grigri-2.jpg'),
(28, 14, 'https://www.omniprogear.com/v/vspfiles/photos/PD14BTM53ASL-2.jpg'),
(29, 15, 'https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw3e8fbabc/products/belay_rappel/S16/620073_PURP_ATC_web.jpg?sw=472'),
(30, 16, 'https://images-na.ssl-images-amazon.com/images/I/51gMPrP2BHL._SL1200_.jpg'),
(31, 16, 'https://cdn.shopify.com/s/files/1/0378/0373/products/170608_CAIRN_Studio-1530.jpg?v=1525081768'),
(32, 16, 'https://images-na.ssl-images-amazon.com/images/I/61oq4BpN2%2BL._SX466_.jpg'),
(33, 17, 'https://content.backcountry.com/images/items/900/TRG/TRG002C/BL.jpg'),
(34, 18, 'https://content.backcountry.com/images/items/900/PTZ/PTZ008K/BL.jpg'),
(35, 19, 'https://content.backcountry.com/images/items/900/ELR/ELR000K/SL.jpg'),
(36, 19, 'https://cdn.shopify.com/s/files/1/1059/7520/products/edelrid-mega-jul-sport-belay-device_1024x1024.jpg?v=1527335517'),
(37, 20, 'https://images-na.ssl-images-amazon.com/images/I/71b3ieifIxL._SX425_.jpg'),
(38, 21, 'https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/15/73/278805_19565_L2.jpg'),
(39, 21, 'https://cdn.mec.ca/medias/sys_master/fallback/fallback/8812658524190/5045968-SST00-fallback.jpg'),
(40, 21, 'https://cdn3.volusion.com/dcyaq.vwgyt/v/vspfiles/photos/LM-320204-1-2.jpg?1497966480'),
(41, 22, 'https://cdn.mec.ca/medias/sys_master/fallback/fallback/8812658524190/5045968-SST00-fallback.jpg'),
(42, 23, 'https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/17/97/301188_15610_L2.jpg'),
(43, 24, 'https://images-na.ssl-images-amazon.com/images/I/81Si2u-O94L._SL1500_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `company` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `category` varchar(20) NOT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `activity` varchar(15) NOT NULL,
  `description` text NOT NULL,
  `misc_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `company`, `name`, `price`, `category`, `gender`, `activity`, `description`, `misc_details`) VALUES
(1, 'La Sportiva', 'Solutions', 18000, 'shoes', 'women', 'climbing', 'The Women\'s Solution Climbing Shoe is La Sportiva\'s most popular answer to difficult boulder problems and steep sport routes. Drastically downturned, this shoe is one of the best for overhangs, scummy heel hooks, greasy smears, and microscopic edges. La Sportiva\'s revered P3 Power Platform was first developed specifically for this shoe, and it retains the shoe\'s aggressive downturn for the shoe\'s life. A shoe this technical deserves its own special rubber compound, and it\'s one of the few out there to feature Vibram\'s XS Grip2 rubber, which is extremely stiff around the toe box and soft, supple, and thin at the heel and arch. With more flexibility at the heel, the Solution bends to your will when you\'re toeing off-angled footholds and high-stepping the top-out.\n\nApart from the new, flashy colors, this Solution maintains the same women-specific last and 3D-shaped heel that gave last season\'s model such a solid fit. The Lock Harness System wraps the leather upper snugly around your foot for a customized feel that stretches only slightly, and the Lorica tongue adds subtle padded cushioning and ventilation. The Solution might sport the speediest closure out of any climbing shoe; its Fast Lacing System uses one hook-and-loop strap that cinches three separate sections for a snug fit that\'s ready to go on-and-off after each boulder attempt.\nThis Solution has a modernly refined, 3D-shaped heel cup that keeps a solid fit no matter how scummy that heel hook feels. The Lock Harness System wraps the leather upper snugly around your foot for a customized feel that stretches only slightly, and the Lorica tongue adds subtle padded cushioning and ventilation. The Solution might sport the speediest closure out of any climbing shoe; its Fast Lacing System uses one hook-and-loop strap that cinches three separate sections for a snug fit that\'s ready to go on-and-off after each boulder attempt.', '{\r\n    \"upper material\": \"Leather, Lorica\",\r\n    \"lining\": \"HF (toe box, arch\",\r\n    \"closure\": \"Hook-and-loop, face lacing system\",\r\n    \"midsole\": \"LaspoFlex (0.9 mm, toe)\",\r\n    \"rubber\": \"Vibram XS Grip2 (4 mm)\",\r\n    \"last\": \"Women\'s PD 75\",\r\n    \"profile\": \"Sharp downturn\", \r\n    \"available sizes\": [33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42],\r\n    \"color\" : \"White/lily orange\",\r\n    \"profile\": \"Sharp downturn\",\r\n    \"asymmetric curvature\": \"Aggressive\",\r\n    \"weight\": \"8.89 oz\",\r\n    \"recommended use\": \"Bouldering, sport climbing\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(2, 'Arc\'teryx', 'Atom LT', 23000, 'clothing', 'men', 'clothing', 'Who needs a multi-tool when you\'ve got the ultra-versatile Arc\'teryx Men\'s Atom LT Hooded Insulated Jacket working just the same? Metaphors aside, you might want to actually bring along a multi-tool (just in case), but for breathable insulation on any all alpine adventures, you\'ve got the jacket equivalent with the high-performing insulator.\n\nSki touring, winter hiking, frigid ice climbing routes-the Atom LT can handle it all with a durable and lightweight Tyono fabric exterior, while the DWR (Durable Water Repellent) treatment fends off light rain and snowfall to keep you dry when overcast weather decides to throw a little moisture your way. To bolster its adaptability, the Atom LT is equipped with gusseted underarms and Polartec Power Stretch side panels to ensure an unimpeded range of motion whether you\'re wearing it as a midlayer or an external shell. Perhaps most importantly, though, is the Atom LT\'s synthetic Coreloft insulation. This breathable synthetic insulation not only retains warmth in wet weather, but also offers maximum thermal efficiency without compromising the compressibility of the fibers. A StormHood offers added coverage when your beanie isn\'t enbough, and the adjustable hem provides a personalized, snug fit to keep the could out.', '{\r\n    \"material\": \"Tyono (20D nylon), DWR coating, Polartec Power Stretch\",\r\n    \"insulation\": \"Coreloft 60\",\r\n    \"fit\": \"Trim\",\r\n    \"length\": \"Hip\",\r\n    \"hood\": \"Stormhood\",\r\n    \"pockets\": \"2 hand, 1 chest\",\r\n    \"recommended use\": \"All-mountain skiing, all-mountain snowboarding, hiking, ice climbing, mountaineering\",\r\n    \"manufacturer warranty\": \"Limited\"\r\n}'),
(3, 'Organic', 'Simple Crash Pad', 17000, 'crash pad', NULL, 'climbing', 'Organic\'s most popular pad! A streamlined version of the Full Pad, the Simple Pad (36 x 48 x 4 in) is the same exact pad without the sewn on pocket flap. The go-to option for boulderers looking for the highest quality foam and fabrics without any added bells or whistles. This elegant pad closes via 4 simple metal bucket closures along the outside of the pad (3 along the 36 in height and 1 on the bottom. For extra padding, our new slider easily fits inside when closed, for ease of transport. Chosen Best in Class by Gearinstitude.com 2017 crash pad review: www.gearinstitude.com/c,imbing/item/organic-climbing-simple-pad.\n\nThe Simple Pad features a 1050d ballistics shell, 100d pad top, 3 convenient grab handles, hybrid hinge, beefy adjustable shoulder straps, sternum stabilizer, hip belt, and compatible with our deluxe hip belt for added support. Add our innovative Load Flap for easily and securely piggybacking multiple pads to your simple pad. The landing zone is fully customizable in your choice of background color and accent colors and is made of one-of-a-kind from recycled cutting room scraps.', '{\r\n    \"dimensions\": \"48 x 36 x 4 in\",\r\n    \"weight\": \"12 lb\",\r\n    \"recommended use\": \"Bouldering\"\r\n}'),
(4, 'Organic', 'Lunch Bag Chalk Bucket', 1400, 'chalk bag', NULL, 'climbing', 'Our time-tested iconic bucket design provides a secure warehouse fro your chalk supply. Burly 100d nylon fabric is stiff, ensuring the Lunch Bag Bucket stays open while you\'re bouldering. The bag seals with a 1/4 in hook and loop and then rolls down and clips like a boater\'s dry bag securely closed with an indestructible metal bucket. A big outer pocket, two elastic brush-loops and signature Organic colors round out this stylish, user-friendly bouldering necessity. Made from your choice of customized colors in one-of-a-kind designs created by recycling our cutting scraps!', '{\r\n    \"material(s)\": \"Recycled scrap 1000-denier Cordura nylon\",\r\n    \"weight\": \"7 oz\",\r\n    \"recommended use\": \"Bouldering\"\r\n}'),
(5, 'Camp USA', 'Orbit Express KS', 1800, 'quickdraw', NULL, 'climbing', 'By getting the job done, we mean the Camp USA Orbit Express KS Quickdraw is an essential piece to saving your ass when you punt off climbs. This affordable draw features recent innovations by Camp USA, like the Orbit carabiners refashioned with a slimmer SphereLock nose that works like a snag-free keylock nose, except it minimizes play between the gate and nose. Camp USA added a Karstop Evo carabiner retainer to the durable dogbone for enhanced stability when you\'re clipping ropes.', '{\r\n    \"carabiner material\": \"7075 aluminum\",\r\n    \"gate type\": \"Straight, bent\",\r\n    \"sling material\": \"Polyester\",\r\n    \"sling width\": \"16 mm\",\r\n    \"sling length\": \"11 cm\",\r\n    \"strength\": \"22 kN (sling), 24 kN (carabiner, major axis), 7 kN (carabiner, minor axis), 8 kN (open gate)\",\r\n    \"weight\": \"3.4 oz\",\r\n    \"recommended use\": \"Sport climbing\",\r\n    \"manufacturer warranty\": \"3 year limited\"\r\n}'),
(6, 'Petzl', 'William', 1800, 'carabiner', NULL, 'climbing', 'The Petzl William Lock Carabiner\'s extra-large gate opening makes it an excellent choice for anchors, belaying, and any other time you need a massive locking carabiner. The William is indispensable for belaying directly from the anchor point with a Munter hitch on single or double rope. Petzl also gave this locking carabiner a large basket to accept multiple slings and \'biners at complex anchors. Have you ever been on a wall climb when this didn\'t happen?', '{\r\n    \"material\": \"Aluminum\",\r\n    \"gate type\": \"Straight, locking\",\r\n    \"features\": \"Keylock nose\",\r\n    \"major axis stregnth\": \"27 kN\",\r\n    \"minor axis stregnth\": \"8 kN\",\r\n    \"open gate strength\": \"8 kN\",\r\n    \"gate opening\": \"28 mm (screw-lock), 27 mm (ball-lock)\",\r\n    \"weight\": \"6.17 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warrantY\": \"3 years\"\r\n}'),
(7, 'Petzl', 'Spirit Express', 1700, 'quickdraw', NULL, 'climbing', 'The average spirit of every climber is strong, stoked, and adventurous. Similarly, the Spirit Express Quickdraw is one of Petzl\'s stronger quickdraws, and its beefiness gives you a little more stoked confidence to power through cruxes. Its sling stays rigidly stiff when you\'re clipping overhangs, and the String retainer continues to ease rope-clipping for better efficiency. Both Spirit carabiners have keylock noses to reduce snagging, and the rope-clipping carabiner\'s gate is bent for better ergonomics.', '{\r\n    \"sling material\": \"Polyester\",\r\n    \"sling length\": \"12 cm\",\r\n    \"strength\": \"22 kN (sling), 23 kN (carabiner, major axis), 8 kN (minor axis), 9 kN (open gate)\",\r\n    \"gate opening\": \"22 mm (straight), 25 mm (bent)\",\r\n    \"features\": \"Keylock noses, carabiner retainer\",\r\n    \"weight\": \"3.3 oz\",\r\n    \"recommended use\": \"Sport climbing\",\r\n    \"manufacturer warranty\": \"3 years\"\r\n}'),
(8, 'The North Face', '2-Meter Dome Tent', 550000, 'tent', NULL, 'camping', 'Built on decades of research, rigorous lab and field testing, and loads feedback from TNF athletes, The North Face 2-Meter Dome Tent stands alone as the quintessential mountaineering palace for surviving the world\'s most extreme environments. Part of The North Face\'s highly coveted Summit Series, this modern expedition tent features a classic hemispheric shape that descends directly from Buckminster Fuller\'s original 1975 prototype. Modern materials, serious advances in storm-proofing, and powerful ventilation systems make the 2-Meter Dome the ideal base-camp shelter for surviving an Antarctic deep freeze, braving an arctic winter, or hunkering down during a relentless, weeklong Himalayan storm.', '{\r\n    \"material\": \"210D nylon oxford (body and fly), PU coating (1500 mm), 420D nylon taffeta (floor), PU coating (1500 mm)\",\r\n    \"capacity\": \"8-person\",\r\n    \"season\": \"4-season\",\r\n    \"wall type\": \"Double-wall\",\r\n    \"freestanding\": \"Yes\",\r\n    \"poles\": \"Easton 7075 aluminum\",\r\n    \"pole attachment\": \"Sleeves\",\r\n    \"number of doors\": 2,\r\n    \"number of vestibules\": 0,\r\n    \"ventilation\": \"Window vents, chimney vent\",\r\n    \"seams\": \"Fully taped\",\r\n    \"interior height\": \"83 in\",\r\n    \"floor dimensions\": \"155 in\",\r\n    \"floor space\": \"125 sq ft\",\r\n    \"packed size\": \"32 x 23 in\",\r\n    \"fast-pitch option\": \"Yes, footprint not included\",\r\n    \"trail weight\": \"47 lb\",\r\n    \"recommended use\": \"Camping\",\r\n    \"manufacturer warranty\": \"Lifetime\"\r\n}'),
(9, 'Kelty', 'Late Start Tent', 16000, 'tent', NULL, 'camping', 'Let all the alpine starters fight over who gets the summit first, and get a solid night\'s sleep in the Kelty Late Start Tent. By the time you get out of this rugged, roomy tent, all of them will be stumbling sleepily back to their tents, and you\'ll get the mountain to yourself. This single-person tent has more space than most thanks to the pre-bent poles that expand internal space, and the rain fly creates a vestibule over the single door to store backpacking and camping gear. Kelty\'s Quick-Corner Technology utilizes large sleeves at the corners for the poles to slide into, instead of the usual grommets that take more time and patience.', '{\r\n    \"material\": \"No-see-um mesh (wall), 68D polyester (floor, fly), aluminum (1800mm, poles)\",\r\n    \"capacity\": \"1-person\",\r\n    \"season\": \"3-season\",\r\n    \"wall type\": \"Double\",\r\n    \"freestanding\": \"Yes\",\r\n    \"poles\": 2,\r\n    \"pole attachment\": \"Quick-corner technology\",\r\n    \"number of doors\": 1,\r\n    \"number of vestibules\": 1,\r\n    \"vestibule space\": \"6.4 sq ft\",\r\n    \"ventilation\": \"Mesh walls\",\r\n    \"floor dimensions\": \"85 x 40 x 30 in\",\r\n    \"floor space\": \"20.6 sq ft\",\r\n    \"packed size\": \"15 x 7 x 7 in\",\r\n    \"trail weight\": \"3 lb 5 oz\",\r\n    \"packed weight\": \"3 lb 12 oz\",\r\n    \"recommended use\": \"Backpacking\",\r\n    \"manufacturer warranty\": \"Limited lifetime\"\r\n}'),
(10, 'Arc\'teryx', 'FL-365 Harness', 14500, 'harness', 'male', 'climbing', 'You can rely on the Arc\'teryx Men\'s FL-365 Harness for fast and light climbs whether you\'re on rock, ice, or something mixed in the alpine. Warp Strength Technology separates the webbing inside this versatile harness in order to better balance your weight evenly and offer more comfort without adding heavy padding. Burly Double Weave fabric offers four-way stretch capability, so you can climb as if you aren\'t wearing a harness at all.\r\n\r\nArc\'teryx equipped the FL-365 Harness with a single self-locking buckle at the waist, and the elasticized leg loops offer a snug fit whether you have ice climbing layer on or you\'re wearing summer shorts. There are four large gear loops for multiple trad racks, and four slots accommodate ice clippers. This harness also features a stainless steel quick hook at the rear for drop-seat functionality, a rear haul loop, and an extra loop for chalk bags or belay devices.', '{\r\n    \"material\": \"Burly double weave (50% nylon, 43% polyester, 7% elastane)\",\r\n    \"buckles\": \"7075-T6 aluminum, single self-locking waist\",\r\n    \"gear loops\": 4,\r\n    \"ice clipper slots\": 4,\r\n    \"haul loop\": \"Yes\",\r\n    \"chalk bag hanger\": \"Yes\",\r\n    \"weight\": \"12.9 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warrantY\": \"Limited\"\r\n}'),
(11, 'Arc\'teryx', 'FL-355 Harness', 14500, 'harness', 'women', 'climbing', 'Built for women who climb ice, rock, and alpine routes, the Arc\'teryx Women\'s FL-355 Harness combines high performance with an incredibly lightweight construction for unrivaled versatility. With an exceptionally comfortable women-specific fit, the FL-355 is made from Burly Double Weave four-way stretch material that is both strong and flexible. Type 66 nylon webbing is found in the elasticized, fixed Sure Fit leg loops that automatically adjust for a precise fit, no matter your size or how many layers you\'re wearing, allowing you to take this harness from the gym to the ice wall.\r\n\r\nWith its longer belay loop, it accommodates the women\'s differential between waist and leg loops. Equipped with Arc\'teryx\'s signature Warp Strength Technology, the FL-355 equally distributes weight across the entire harness for lasting comfort, instead of loading a single strip of webbing in the center which creates uncomfortable pressure points. Meant for use in in any condition, this harness is outfitted with a self-locking buckle, four ice clipper slots, four gear loops, a rear haul loop, and a stainless-steel quick hook that allows you to use the bathroom without having to remove anything.', '{\r\n    \"material\": \"Burly double weave (50% nylon, 43% polyester, 7% elastane)\",\r\n    \"buckles\": \"7075-T6 aluminum\",\r\n    \"gear loops\": 4,\r\n    \"ice clipper slots\": 4,\r\n    \"haul loop\": \"Yes\",\r\n    \"chalk bag hanger\": \"Yes\",\r\n    \"weight\": \"12.5 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warrantY\": \"Limited\"\r\n}'),
(12, 'Osprey', 'Aether AG 60L', 29000, 'backpack', NULL, 'hiking', '\r\nA custom-fit pack with good support can mean the difference between a weekend getaway and a back-breaking death march. Shoulder the Osprey Aether 60 Backpack and you\'ll have 40 years of pack fitting experience and expertise on your side, including the LightWire peripheral frame for support and an IsoForm CM waist-belt that can be heat molded for a fully customized fit. Plus, the detachable top lid doubles as a lumbar pack so you can carry the perfect amount of gear on day hikes after establishing your main camp.', '{\r\n    \"material\": \"[main] 210D nylon dobby, [accent] 210D high tenacity nylon, [bottom] 500D nylon packcloth\",\r\n    \"volume\": \"[small] 57L (3478cu in), [medium] 60L (3661cu in), [large] 63L (3845cu in)\",\r\n    \"support/suspension\": \"Anti-gravity\",\r\n    \"shoulder straps\": \"IsoForm anti-gravity\",\r\n    \"waist belt\": \"IsoForm CM\",\r\n    \"hydration compatible\": \"External sleeve\",\r\n    \"access\": \"Top, side panel\",\r\n    \"pockets\": \"2 side stretch mesh, 2 zippered hipbelt, 1 large front\",\r\n    \"ice axe carry\": \"Dual\",\r\n    \"trekking pole carry\": \"Stow-on-the-go\",\r\n    \"sleeping bag compartment\": \"Zippered\",\r\n    \"rain cover\": \"Sold separately\",\r\n    \"detachable daypack\": \"Daylid\",\r\n    \"compression\": \"Dual side straps\",\r\n    \"weight capacity\": \"35 - 60 lb\",\r\n    \"dimensions\": \"33 x 15 12 in\",\r\n    \"weight\": \"4 lb 15.5 oz\",\r\n    \"recommended use\": \"Backpacking\",\r\n    \"manufacturer warranty\": \"Lifetime\"\r\n}'),
(13, 'Osprey', 'Hydraulics Hydration Reservoir', 4200, 'hydration pack', NULL, 'hiking', 'Hydraulics Hydration Reservoir\r\nCustom-fit suspension systems are Osprey\'s bread and butter, so it makes sense that the Hydraulics Hydration Reservoir is shaped with a rigid backer plate to prevent any interference with how your pack fits and carries. Additionally, the durable TPU reservoir material keeps water tasting exactly the way it should, and the bite valve keeps the hose secure when you\'re cruising up the trail.', '{\r\n    \"material\": \"TPU (thermoplastic polyurethane)\",\r\n    \"volume\": \"100 oz\",\r\n    \"valve\": \"Bite, magnetic\",\r\n    \"dimensions\": \"15 x 7 x 4 in\",\r\n    \"weight\": \"10.9 oz\",\r\n    \"recommended use\": \"Hiking, backpacking\",\r\n    \"manufactuerer warranty\": \"Lifetime\"\r\n}'),
(14, 'Petzl', 'Grigri', 11000, 'belay device', NULL, 'climbing', 'Petzl\'s Grigri has become a standard in the climbing community over the past decade. Climbing gyms now test on them, and a lot of elite climbers rely on their belayers to use the Grigri for its dependable assisted braking and slack-feeding. Petzl simply nailed the balance between assisted braking and slack-feeding with this contemporary model of the Grigri Belay Device. For this newest model, Petzl expanded the rope diameter by optimizing the use specifically for ropes ranging from 8.5 to 11mm. After doing all the research, there really isn\'t a larger rope diameter ideal for ropes as skinny nor as thick as the modern Grigri. Compared to the Grigri+, this specific model is ideal for experienced belayers and advanced climbers.', '{\r\n    \"material\": \"(side plates) Aluminum, (cam and friction plate) stainless steel, (handle) reinforced nylon\",\r\n    \"type\": \"Assisted brake\",\r\n    \"rope diameter\": \"8.5 - 11 mm\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warranty\": \"3 years\"\r\n}'),
(15, 'Black Diamond', 'ATC', 1800, 'belay device', NULL, 'climbing', 'They say imitation is the most sincere form of flattery, which is why you won\'t find the Black Diamond ATC griping about the wannabes. Built to handle ropes ranging in diameter from 7.7mm to 11mm, this simple but functional device handles belaying and rappelling with kink-free ease. And weighing in at a slim 60-grams, it\'s a must-have addition to your harness.', '{\r\n    \"type\": \"Tube\",\r\n    \"rope diameter\": \"7.7 - 11 mm\",\r\n    \"weight\": \"2.3 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(16, 'Trango', 'Cord Trapper Rope Tarp', 2000, 'accessory', NULL, 'climbing', 'Trango designed its Cord Trapper Rope Tarp to keep your rope safe, clean, compact, and free from tangles while it\'s in your pack. Its simple design reduces weight, bulk, and price compared to rope bags. Just roll this tarp up, tighten the strap, and slide it into your pack for a clean and efficient way to get to the crag. ', '{\r\n    \"closure\": \"1 metal buckle\",\r\n    \"tarp dimension\": \"4 x 5 ft\",\r\n    \"weight\": \"9.5 oz\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(17, 'Trango', 'Vergo', 10000, 'belay device', NULL, 'climbing', 'Trango\'s new Vergo Belay Device brings the assisted braking device to whole new levels of safety and ergonomics for sport climbers and multi-pitch trad climbers. Unlike most assisted braking devices, the Vergo\'s safest way to use is also the smoothest. Clear visual and physical indicators make the Vergo easy to learn and even easier to use safely. Where most assisted braking devices require you to feed slack upwards, thereby causing shoulder strain, the Vergo promotes a natural process by feeding slack leftwards. It\'s nearly impossible to override the Vergo even if you\'re mishandling it, especially when compared to to standard assisted braking devices that require you to override the device for a millisecond (or longer) in order to dish out slack, lower climbers, or allow climbers to continue climbing after taking. The Vergo also works as a guide mode when you\'re belaying someone from anchors on a multi-pitch.', '{\r\n    \"type\": \"Assisted brake\",\r\n    \"rope diameter\": \"8.9 - 10.7 mm\",\r\n    \"weight\": \"6.8 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(18, 'Petzl', 'Verso', 2000, 'belay device', NULL, 'climbing', 'Petzl created the Verso Belay Device for lovers of the Reverso who want to lighten their rack. Not only is the Verso 31% lighter than the Reverso, it\'s more compact. Whether you\'re climbing with a single, half, or twin rope, Petzl\'s Adaptive Rope Control technology adapts by increasing or decreasing the braking friction to suit the diameter and conditions. When your climbing partner is working the crux, the Verso\'s asymmetrical grooved sidewalls decrease friction for ease when taking up slack. Use this belay device with asymmetrical biners for max efficiency. ', '{\r\n    \"material\": \"Aluminum\",\r\n    \"type\": \"Tube\",\r\n    \"rope diameter\": \"8.5 - 11 mm\",\r\n    \"weight\": \"1.9 oz\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warranty\": \"3 years\"\r\n}'),
(19, 'Edelrid', 'Megal Jul', 4000, 'belay device', NULL, 'climbing', 'Use the versatile Edelrid Mega Jul Belay Device for belaying lead climbers, belaying a second or third follower from the anchor, lowering top-rope climbers from the anchor, rappelling, or abseiling. The assisted braking thumb loop (the colored, covered section) gives you more control when you\'re lowering or rappelling. The large steel loop on top attaches to anchors so the device can lock up without your brake hand-drink some water, enjoy the sights, or manage your rope while your second (or third) top-ropes to you. Edelrid also added a small eyelet so you can lower your top rope climbers directly from the anchors.', '{\r\n    \"material\": \"Stainless steel\",\r\n    \"rope material\": \"7.8 - 10.5 mm\",\r\n    \"weight\": \"2.3 oz\",\r\n    \"recommended use\": \"Sport climbing, big wall, multipitch\"\r\n}'),
(20, 'Edelrid', 'Boa Climbing Rope', 11000, 'rope', NULL, 'climbing', 'From bouldery sport routes to long trad climbs to top rope sessions, Edelrid\'s Boa Eco 9.8mm Climbing Rope will keep you safe and confident while you send. Edlerid made it from high-quality yarns that were left over from the production of previous ropes, so no new fibers were created for its production to reduce waste and environmental impact. A Thermo Shield treatment keeps the Boa Eco supple and smooth throughout its life, and the kernmantle construction combines a stretchy core with a durable outer sheath for long-lasting strength and killer handling.', '{\r\n    \"type\": \"Single\",\r\n    \"diameter\": \"9.8 mm\",\r\n    \"static elongation\": \"9.3%\",\r\n    \"dynamic elongation\": \"32%\",\r\n    \"impact force\": \"8.8 kN\",\r\n    \"UIAA falls\": 7,\r\n    \"weight\": \"62 g/m\",\r\n    \"recommended use\": \"Climbing\"\r\n}'),
(21, 'Black Diamond', '9.9 Rope', 18000, 'rope', NULL, 'climbing', 'The 9.9 Rope is Black Diamond\'s thickest and most durable climbing rope, and it\'s still versatile for virtually any style of climb. This rope balances the burliness required for big- wall projects with the beginner-friendly handling that new climbers need at the gym. Its Endurance rope boasts hardcore durability against rocky edges, and there\'s a half mark for easily identifying the rope\'s center for rigging rappels.', '{\r\n    \"type\": \"Single\",\r\n    \"diameter\": \"9.9 mm\",\r\n    \"static elongation\": \"7.6%\",\r\n    \"dynamic elongation\": \"32%\",\r\n    \"impact force\": \"8.54 kN\",\r\n    \"UIAA falls\": 7,\r\n    \"center mark\": \"Yes\",\r\n    \"weight\": \"64 g/m\",\r\n    \"recommended use\": \"Climbing\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(22, 'JetBoil', 'MiniMo Stove', 14500, 'camp kitchen', NULL, 'camping', 'Last time you went solo-backpacking you were running with so few accessories that you were searching for a water-worn rock bowl that you could boil water in for your MREs on the trail. You hadn\'t thought of all of the great miniature cooking tools you could have had until your stomach was grumbling for the 4th day in a row of not finding a sufficient cooking apparatus from nature. You don\'t have to be an expert on primitive technology and making bowls from river sediment anymore, now all you need to do is toss your Jetboil MiniMo Cooking System into your pack and you\'ll be delighted by the tasty treats you can whip up in the great beyond.\r\n\r\nWith one super-efficient butane burner, MiniMo can boil 16oz of water in only 2 minutes and 15 seconds, and it has an adjustable temperature gauge, so you don\'t have to scorch your food. Metal handles provide an easy handling point for both cooking and eating, and a lower spoon angle enables you to eat right from the cup. Smart for storage space, the MiniMo features sideways burner storage to minimize the space it needs in your pack, and an insulated drink-through lid means you can start your day with hot coffee and end it with hot tea by the fire to keep warm.', '{\r\n    \"warning\": \"This product can expose you to chemicals including 1,3-Butadiene, which are known to the State of California to cause cancer and birth defects or other reproductive harm. For more information go to www.P65Warnings.ca.gov.\",\r\n    \"material\": \"[Burner] Stainless steel, [handles] metal, [cup] anodized aluminum, [cup cozy] neoprene\",\r\n    \"fuel type\": \"Canister (butane)\",\r\n    \"boil time\": \"2 minutes 15 seconds (16 oz)\",\r\n    \"heat output\": \"6,000 BTU/h\",\r\n    \"piezo ignition\": \"Yes\",\r\n    \"simmer\": \"Turn-to-adjust simmer (4 turns of adjustment)\",\r\n    \"fuel bottle/canister included\": \"No\",\r\n    \"dimensions\": \"5 x 6 in\",\r\n    \"weight\": \"14.6 oz\",\r\n    \"recommended use\": \"Backpacking, mountaineering, camping\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(23, 'JetBoil', 'Flash Stove', 10000, 'camp kitchen', NULL, 'camping', 'Click on the Jetboil Flash Stove\'s easy-to-use ignition and hum a show tune-by the time you hit the second chorus (a hundred seconds), you\'ll have steaming hot delight. Unlike classic camp stoves, this self-contained unit eliminates the issues of an open burner and takes the guesswork out of a quick meal. Finish your food, pack the fuel canister inside the insulated mug, and stow the whole lightweight kit away in compact style.', '{\r\n    \"warning\": \"This product can expose you to chemicals including 1,3-Butadiene, which are known to the State of California to cause cancer and birth defects or other reproductive harm. For more information go to www.P65Warnings.ca.gov.\",\r\n    \"fuel type\": \"Canister (butane)\",\r\n    \"boil time\": \"1 minute 40 seconds\",\r\n    \"heat output\": \"9,000 BTU/hr\",\r\n    \"piezo ignition\": \"Yes\",\r\n    \"simmer\": \"No\",\r\n    \"includes\": \"1L FluxRing cooking cup with insulating sleeve, lid, fuel canister stabilizer, bottom cover\",\r\n    \"fuel bottle/canister included\": \"No\",\r\n    \"dimension\": \"4.1 x 7.1 in\",\r\n    \"weight\": \"13.1 oz\",\r\n    \"recommended use\": \"Backpacking\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}'),
(24, 'JetBoil', 'MicroMo Stove', 14000, 'camp kitchen', NULL, 'camping', 'Weighing just twelve ounces and packing all the quick-boiling strength of a Jetboil, the MicroMo Personal Cooking System is an ultralight backpacking stove that will boil water in just over two minutes, but can be turned down when you need to finesse your dinner with a touch of low-heat love.\r\n\r\nThe MicroMo has the same wind-blocking shroud that can be found on stoves nearly twice its weight, and it offers reliable cold-weather performance with the ability to run consistently in temperatures down to 20F. The cooking system comes with Jetboil\'s FluxRing cup, a drink-through lid, and a lightweight insulating cozy to help keep your coffee hot during those cold mornings in the mountains when hot drinks are non-negotiable. The MicroMo may be light, but it\'s still a proper Jetboil, so it will still work with Jetboil\'s coffee press, hanging kit, and pot support (all sold separately).', '{\r\n    \"warning\": \"This product can expose you to chemicals including 1,3-Butadiene, which are known to the State of California to cause cancer and birth defects or other reproductive harm. For more information go to www.P65Warnings.ca.gov.\",\r\n    \"material\": \"FluxRing (cup)\",\r\n    \"fuel type\": \"Canister\",\r\n    \"boil time\": \"2 minutes 15 seconds (16 oz)\",\r\n    \"heat output\": \"6,000 BTU/h\",\r\n    \"includes\": \"Cooking cup, lid, insulating coozy, shroud, igniter, bottom cover\",\r\n    \"weight\": \"12 oz\",\r\n    \"recommended use\": \"Backpacking, mountaineering, ultralight backpacking, weekend camping\",\r\n    \"manufacturer warranty\": \"1 year\"\r\n}');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `first_name` varchar(20) NOT NULL DEFAULT 'Guest',
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `token` varchar(40) DEFAULT NULL,
  `is_guest` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `last_name`, `first_name`, `email`, `password`, `token`, `is_guest`) VALUES
(1, 'Le', 'Quan', 'quandhle@gmail.com', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_connection`
--

CREATE TABLE `user_connection` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `ip_address` int(11) DEFAULT NULL,
  `token` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_connection`
--
ALTER TABLE `user_connection`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_connection`
--
ALTER TABLE `user_connection`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
