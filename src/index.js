import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import '@/styles/less.less';
import '@/styles/scss.scss';
import './babel.js';
import json from '../assets/json.json';
import WebpackLogo from '../assets/webpack-logo.png';
import xml from '../assets/data.xml';
import csv from '../assets/data.csv';

const post = new Post('Webpack Post Title', WebpackLogo);

//console.log('Post', post.toString());

$('pre').addClass('code').html(post.toString());


console.log('JSON', json);

console.log('XML', xml);

console.log('CSV', csv);
