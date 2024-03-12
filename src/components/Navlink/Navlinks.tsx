"use client"
import { PRIMARY_COLOR, SECOUNDARY_COLOR } from '@/utilities/constants';
import { Typography } from '@mui/material';
import Link from 'next/link';

import {useParams,useRouter,usePathname} from 'next/navigation'
import React from 'react'

const Navlinks = ({title,path}:{title:string,path:string}) => {
  useRouter();
   const pathname = usePathname();
    const path1 = pathname.slice(1).split("/")[0];
   const isPath = path === path1;

  //  const path1 = pathname.slice(1).split("/")[0];
  //  const isPath = path === path1;
  const styles = {
    link: {
      textDecoration: "none",
      color: SECOUNDARY_COLOR,
    },
    linkActive: {
      textDecoration: "none",
      color: PRIMARY_COLOR,
    },
  };
  return (
    <Link href={path} style={isPath ? styles.linkActive : styles.link}>
      <Typography variant="h6" fontWeight={500}>
        {title}
      </Typography>
    </Link>
  );
}

export default Navlinks