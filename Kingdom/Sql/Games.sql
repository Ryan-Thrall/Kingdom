-- Active: 1690138331133@@SG-MyProjects-7713-mysql-master.servers.mongodirector.com@3306@Kingdom

CREATE TABLE
    IF NOT EXISTS games(
        id INT NOT NULL AUTO_INCREMENT primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        creatorId varchar(255) NOT NULL COMMENT 'Account Id',
        name varchar(255) NOT NULL COMMENT 'Game Name',
        isRanked bool NOT NULL DEFAULT FALSE COMMENT 'Ranked or Not',
        kingId varchar(255) COMMENT 'King Players Id',
        rebelId varchar(255) COMMENT 'Rebel Players Id',
        winnerId varchar(255) COMMENT 'Winners Id',
        mapId INT NOT NULL COMMENT 'Map Id'
    ) default charset utf8 COMMENT '';

SELECT * FROM games;