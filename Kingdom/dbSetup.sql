-- Active: 1690138331133@@SG-MyProjects-7713-mysql-master.servers.mongodirector.com@3306@Kingdom

CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture',
        rank INT DEFAULT 0 COMMENT 'User Rank',
        gamesPlayed INT DEFAULT 0 COMMENT 'Games Played',
        kingWins INT DEFAULT 0,
        kingLosses INT DEFAULT 0,
        rebelWins INT DEFAULT 0,
        rebelLosses INT DEFAULT 0
    ) default charset utf8 COMMENT '';