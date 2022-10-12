import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import Link from 'next/link';
import { FC } from 'react';

interface Iprops {
  routerName: string;
}

const BasicBreadcrumbs: FC<Iprops> = ({ routerName }) => {
  const router = useRouter()
  const routeArray = router.asPath.split('/').slice(1, -1)
  const nameArray = routerName.split('/').slice(1, -1)
  var link = ''
  var array: { name: string, pathName: string }[] = []
  for (let i = 0; i < routeArray.length; i++) {
    let route = routeArray[i];
    let name = nameArray[i];
    link += '/' + route
    array.push({
      name,
      pathName: link
    })
  }


  return (
    <Box role="presentation" sx={{ bgcolor: '#f9f9f9', p: 1, mt: 1 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ maxWidth: 1100, mx: { xs: 4, lg: 'auto' } }}>
        <Link color="inherit" href="/">
          خانه
        </Link>
        {
          array.map((route, index) => (
            <Link key={index} color="inherit" href={route.pathName} >
              {route.name}
            </Link>
          ))
        }
        <Typography color="text.primary">{routerName.split('/').slice(- 1)}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
export default BasicBreadcrumbs