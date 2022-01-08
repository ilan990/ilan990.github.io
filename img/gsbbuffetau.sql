-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Sam 08 Janvier 2022 à 17:23
-- Version du serveur :  5.7.11
-- Version de PHP :  7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gsbbuffetau`
--

-- --------------------------------------------------------

--
-- Structure de la table `labo`
--

CREATE TABLE `labo` (
  `id_labo` int(11) NOT NULL,
  `nom_labo` varchar(10) NOT NULL,
  `labo_chefVente` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `labo`
--

INSERT INTO `labo` (`id_labo`, `nom_labo`, `labo_chefVente`) VALUES
(1, 'intervet', 'Paul'),
(2, 'alk', 'Albert'),
(3, 'cenexi', 'Alex'),
(4, 'serb', 'Bastien'),
(5, 'farmea', 'Stephanie');

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `id_region` int(10) NOT NULL,
  `id_sec` int(2) DEFAULT NULL,
  `region_nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `region`
--

INSERT INTO `region` (`id_region`, `id_sec`, `region_nom`) VALUES
(1, 2, 'Normandie'),
(2, 1, 'ile-de-france'),
(3, 3, 'Haut-de-france'),
(4, 4, 'Mayotte'),
(5, 5, 'Guyane'),
(7, 1, 'Nord-Pas-de-Calais');

-- --------------------------------------------------------

--
-- Structure de la table `responsable`
--

CREATE TABLE `responsable` (
  `id_res` int(10) NOT NULL,
  `nom_res` varchar(25) NOT NULL,
  `prenom_res` varchar(25) NOT NULL,
  `telephone` varchar(25) NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `responsable`
--

INSERT INTO `responsable` (`id_res`, `nom_res`, `prenom_res`, `telephone`, `mail`) VALUES
(1, 'Assouline', 'Ilan', '0123456789', 'ilan@ilan.com');

-- --------------------------------------------------------

--
-- Structure de la table `secteur`
--

CREATE TABLE `secteur` (
  `id_sec` int(2) NOT NULL,
  `libelle_sec` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `secteur`
--

INSERT INTO `secteur` (`id_sec`, `libelle_sec`) VALUES
(1, 'Nord'),
(2, 'Sud'),
(3, 'Est'),
(4, 'Ouest'),
(5, 'Paris');

-- --------------------------------------------------------

--
-- Structure de la table `travailler`
--

CREATE TABLE `travailler` (
  `id_vis` int(10) NOT NULL,
  `date` datetime NOT NULL,
  `id_region` int(10) NOT NULL,
  `role_tra` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `travailler`
--

INSERT INTO `travailler` (`id_vis`, `date`, `id_region`, `role_tra`) VALUES
(1, '2021-06-08 00:00:00', 1, 'caissier'),
(1, '2021-10-17 19:50:45', 1, 'caissier'),
(2, '2021-10-10 00:00:00', 2, 'rayon'),
(3, '2020-09-12 00:00:00', 5, 'manager'),
(3, '2021-12-09 00:00:00', 3, 'comptable'),
(4, '2021-11-28 00:00:00', 4, 'gerant'),
(5, '2021-09-01 00:00:00', 5, 'manager'),
(6, '2020-11-24 00:00:00', 5, 'manager'),
(6, '2021-11-28 00:00:00', 2, 'rayon'),
(7, '2020-12-16 00:00:00', 4, 'gerant'),
(8, '2019-04-08 00:00:00', 1, 'caissier'),
(8, '2021-08-16 00:00:00', 3, 'comptable');

-- --------------------------------------------------------

--
-- Structure de la table `visiteur`
--

CREATE TABLE `visiteur` (
  `id_vis` int(10) NOT NULL,
  `nom_vis` varchar(25) NOT NULL,
  `prenom_vis` varchar(50) NOT NULL,
  `adresse_vis` varchar(50) NOT NULL,
  `CP_vis` int(10) NOT NULL,
  `ville_vis` varchar(30) NOT NULL,
  `dateEmbauche_vis` datetime NOT NULL,
  `id_sec` int(2) NOT NULL,
  `id_labo` int(11) NOT NULL,
  `id_region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `visiteur`
--

INSERT INTO `visiteur` (`id_vis`, `nom_vis`, `prenom_vis`, `adresse_vis`, `CP_vis`, `ville_vis`, `dateEmbauche_vis`, `id_sec`, `id_labo`, `id_region`) VALUES
(1, 'medhi', 'cament', '71 rue de bout', 75020, 'Paris', '2021-01-17 00:00:00', 2, 3, 3),
(2, 'tibi', 'benjamin', '19 rue du chateau', 75011, 'paris', '2021-08-02 00:00:00', 2, 2, 4),
(3, 'assouline', 'ilan', '240 avenue de ternes', 75017, 'paris', '2021-04-08 00:00:00', 3, 4, 5),
(4, 'cohen', 'shirel', '48 rue des pyramides', 92200, 'Neuilly-sur-Seine', '2021-01-10 00:00:00', 4, 3, 1),
(5, 'ibgui', 'nathan', '190 rue des rigoles', 94120, 'FONTENAY SOUS BOIS', '2021-05-15 00:00:00', 5, 5, 2),
(6, 'elbaze', 'Sarah', '137 avenue de laumiere', 75019, 'paris', '2019-09-16 00:00:00', 3, 2, 3),
(7, 'amouyal', 'ruben', '89 rue des joies ', 75016, 'paris', '2021-12-31 00:00:00', 1, 5, 2),
(8, 'didi', 'jeremy', '234 rue des fontaines', 75015, 'paris', '2020-04-02 00:00:00', 4, 1, 1),
(10, 'ilan', 'ilan', '23 rue de ', 75000, 'paris', '2022-01-21 00:00:00', 2, 2, 4),
(11, 'kavs', 'kavs', 'rue de la rue', 76000, 'zoulettevie', '2022-01-14 00:00:00', 1, 3, 1),
(12, 'Zou', 'lette', 'rue de la ', 75000, 'moncer', '2022-01-11 00:00:00', 1, 2, 7);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `labo`
--
ALTER TABLE `labo`
  ADD PRIMARY KEY (`id_labo`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id_region`),
  ADD KEY `id_sec` (`id_sec`);

--
-- Index pour la table `responsable`
--
ALTER TABLE `responsable`
  ADD PRIMARY KEY (`id_res`);

--
-- Index pour la table `secteur`
--
ALTER TABLE `secteur`
  ADD PRIMARY KEY (`id_sec`);

--
-- Index pour la table `travailler`
--
ALTER TABLE `travailler`
  ADD PRIMARY KEY (`id_vis`,`date`,`id_region`),
  ADD KEY `id_region` (`id_region`);

--
-- Index pour la table `visiteur`
--
ALTER TABLE `visiteur`
  ADD PRIMARY KEY (`id_vis`),
  ADD KEY `id_labo` (`id_labo`),
  ADD KEY `id_sec` (`id_sec`),
  ADD KEY `id_region` (`id_region`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `labo`
--
ALTER TABLE `labo`
  MODIFY `id_labo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `region`
--
ALTER TABLE `region`
  MODIFY `id_region` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `responsable`
--
ALTER TABLE `responsable`
  MODIFY `id_res` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `secteur`
--
ALTER TABLE `secteur`
  MODIFY `id_sec` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `travailler`
--
ALTER TABLE `travailler`
  MODIFY `id_vis` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `visiteur`
--
ALTER TABLE `visiteur`
  MODIFY `id_vis` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `region_ibfk_1` FOREIGN KEY (`id_sec`) REFERENCES `secteur` (`id_sec`);

--
-- Contraintes pour la table `travailler`
--
ALTER TABLE `travailler`
  ADD CONSTRAINT `travailler_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`),
  ADD CONSTRAINT `travailler_ibfk_2` FOREIGN KEY (`id_vis`) REFERENCES `visiteur` (`id_vis`);

--
-- Contraintes pour la table `visiteur`
--
ALTER TABLE `visiteur`
  ADD CONSTRAINT `visiteur_ibfk_1` FOREIGN KEY (`id_labo`) REFERENCES `labo` (`id_labo`),
  ADD CONSTRAINT `visiteur_ibfk_2` FOREIGN KEY (`id_sec`) REFERENCES `secteur` (`id_sec`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
