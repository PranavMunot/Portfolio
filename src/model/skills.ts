import arduino from '../assets/arduino.png'
import css from '../assets/css.png'
import html from '../assets/html-5.png'
import github from '../assets/github.png'
import express from '../assets/express.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import mongodb from '../assets/mongodb.png'
import typescript from '../assets/typescript.png'
import webpack from '../assets/webpack.png'
import vue from '../assets/vue.png'
import material from '../assets/material.png'
import js from '../assets/javascript.png'

type skill = {
    name?: string,
    localURL: string,
    alt: string
}

export const skills: skill[] = [
    {
        name: 'JavaScript',
        localURL: js,
        alt: 'JavaScript logo'
    },
    {
        name: 'CSS',
        localURL: css,
        alt: 'CSS logo'
    },
    {
        name: 'HTML',
        localURL: html,
        alt: 'HTML logo'
    },
    {
        name: 'React',
        localURL: react,
        alt: 'HTML logo'
    },
    {
        name: 'Express',
        localURL: express,
        alt: 'express logo'
    },
    {
        name: 'Redux',
        localURL: redux,
        alt: 'REDUX logo'
    },
    {
        name: 'Mongo',
        localURL: mongodb,
        alt: 'mongodb logo'
    },
    {
        name: 'GitHub',
        localURL: github,
        alt: 'Github logo'
    },
    {
        name: 'TypeScript',
        localURL: typescript,
        alt: 'TS logo'
    },
    {
        name: 'Webpack',
        localURL: webpack,
        alt: 'webpack logo'
    },
    {
        name: 'Vue',
        localURL: vue,
        alt: 'Vue logo'
    },
    {
        name: 'Material UI',
        localURL: material,
        alt: 'Material logo'
    },
]