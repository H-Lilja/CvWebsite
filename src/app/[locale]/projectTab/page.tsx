'use client'; // Ensure this component is treated as a client component
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing'; // Custom Link, assuming it's handling routing logic

import React from "react";

const ProjectsPage = () =>  {
    const t = useTranslations('ProjectsPage');
    return(
        <div>ProjectsPage
        
      <h1>{t('project1')}</h1>
      {/* Dynamically add locale to the URL */}
      <Link href={`/`}>{t('home')}</Link>
    </div>
    )
}

export default ProjectsPage