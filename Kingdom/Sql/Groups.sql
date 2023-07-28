-- Active: 1690138331133@@SG-MyProjects-7713-mysql-master.servers.mongodirector.com@3306@Kingdom

CREATE TABLE
    IF NOT EXISTS groups(
        id INT NOT NULL AUTO_INCREMENT primary key COMMENT 'primary key',
        name varchar(255) NOT NULL COMMENT 'Group Name',
        gameId INT NOT NULL COMMENT 'Game Id',
        wealth INT NOT NULL COMMENT 'Wealth',
        tax INT NOT NULL COMMENT 'Tax per turn',
        pop INT NOT NULL COMMENT 'Population',
        alliance INT NOT NULL COMMENT 'alliance + kingdom - rebels',
        legalStatus varchar(255) NOT NULL COMMENT 'Group Legality'
    ) default charset utf8 COMMENT '';