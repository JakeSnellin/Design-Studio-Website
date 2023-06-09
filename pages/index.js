import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import Featuredprojects from '@/components/FeaturedProjects';
import Head from 'next/head';
import {HYGRAPH_URL, HYGRAPH_PRODUCTIONAUTH_TOKEN} from '../libs/constants';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

import React from 'react'

export const getStaticProps = async () => {
    const headers = {
      'content-type': 'application/json',
      'Authorisation': `Bearer ${HYGRAPH_PRODUCTIONAUTH_TOKEN}`
    };

    const requestBody = {
    query: `query Project {
      projects {
        projectComponent {
          id
          projectDisciplines
          projectTitle
          projectImage {
            url
          }
          featured
        }
      }
    }`,
  };

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody)
  };

  try{
    const response = await (await fetch(HYGRAPH_URL, options)).json();
    console.log('RESPONSE FROM FETCH REQUEST', response?.data);

    return {
      props: { projectData: response }
    }
  }
  catch{
    console.log('ERROR DURING FETCH REQUEST', err);
  }
}

const checkFeatured = (project) => {
  return project.featured === true;
}

export default function Home({projectData}) {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <Hero />
    </div>

      {projectData.data.projects[0].projectComponent.filter(checkFeatured).map(project =>(
        <div key={project.id}><img src={`${project.projectImage.url}`} /></div>
      ))}
      <h1>Homepage</h1>
    </>
  )
}