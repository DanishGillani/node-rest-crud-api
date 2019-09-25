-- --------------------------------------------------------
-- Project:                 Node Rest CRUD API
-- Author:					Danish Ali
-- --------------------------------------------------------

-- Data structure for table node_js_api.users
CREATE TABLE IF NOT EXISTS `users` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(200) NOT NULL,
	`email` varchar(200) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table node_js_api.users: ~5 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `created_at`) VALUES
	(1, 'Steve', 'steve@gmail.com', '2019-09-25 13:20:20'),
	(2, 'John', 'john@gmail.com', '2019-09-25 13:20:20'),
	(3, 'Todd', 'todd@gmail.com', '2019-09-25 13:20:20'),
	(4, 'Smith', 'smith@gmail.com', '2019-09-25 13:20:20'),
	(5, 'Bob', 'bob@gmail.com', '2019-09-25 13:20:20');