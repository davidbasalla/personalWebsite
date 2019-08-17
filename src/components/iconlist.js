import React from 'react'

import styles from './iconlist.module.css'

// Original vs Plain
import AwsIcon from 'devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
import BabelIcon from 'devicon/icons/babel/babel-original.svg'
import Css3Icon from 'devicon/icons/css3/css3-plain-wordmark.svg'
import Html5Icon from 'devicon/icons/html5/html5-plain-wordmark.svg'
import RailsIcon from 'devicon/icons/rails/rails-plain-wordmark.svg'
import NodeIcon from 'devicon/icons/nodejs/nodejs-plain-wordmark.svg'
import ExpressIcon from 'devicon/icons/express/express-original.svg'
import ReactIcon from 'devicon/icons/react/react-original-wordmark.svg'
import RubyIcon from 'devicon/icons/ruby/ruby-plain-wordmark.svg'
import PythonIcon from 'devicon/icons/python/python-plain-wordmark.svg'
import JsIcon from 'devicon/icons/javascript/javascript-plain.svg'
import WebpackIcon from 'devicon/icons/webpack/webpack-plain-wordmark.svg'
import GitIcon from 'devicon/icons/git/git-plain-wordmark.svg'
import PostgresIcon from 'devicon/icons/postgresql/postgresql-plain-wordmark.svg'
import MysqlIcon from 'devicon/icons/mysql/mysql-plain-wordmark.svg'
import MongoIcon from 'devicon/icons/mongodb/mongodb-plain-wordmark.svg'
import LinuxIcon from 'devicon/icons/linux/linux-original.svg'
import DockerIcon from 'devicon/icons/docker/docker-plain-wordmark.svg'

export default () => (
  <ul className={styles.iconList}>
    <li>
      <Html5Icon />
    </li>
    <li>
      <Css3Icon />
    </li>
    <li>
      <JsIcon />
    </li>
    <li>
      <BabelIcon />
    </li>
    <li>
      <NodeIcon />
    </li>
    <li>
      <ExpressIcon />
    </li>
    <li>
      <ReactIcon />
    </li>
    <li>
      <WebpackIcon />
    </li>
    <li>
      <RailsIcon />
    </li>
    <li>
      <RubyIcon />
    </li>
    <li>
      <PythonIcon />
    </li>
    <li>
      <GitIcon />
    </li>
    <li>
      <PostgresIcon />
    </li>
    <li>
      <MysqlIcon />
    </li>
    <li>
      <MongoIcon />
    </li>
    <li>
      <LinuxIcon />
    </li>
    <li>
      <DockerIcon />
    </li>
    <li>
      <AwsIcon />
    </li>
  </ul>
)
