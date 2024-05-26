import React, {useEffect,useState } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th, Box, Typography, Loader } from '@strapi/design-system';
import { getFetchClient } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';

function Plans() {
    const [isLoading, setisLoading] = useState(false)
    const [data, setData] = useState();
    useEffect(async () => {
      setisLoading(true)
      try {
        const { get } = getFetchClient();
        const response = await get(`/${pluginId}/repo`);
        setData(response.data)
      } catch (error) {
        console.log(error);
      }

        setisLoading(false)
    }, [])
    const create = async (plan) => { 
       console.log(plan);
        const { post } = getFetchClient();
        const response = await post(`/${pluginId}/create`, {
            data: plan
        
        });
        console.log(response);

    }
    if(isLoading)  return (<Loader />)
  return (
<Box padding={8} background="neutral100">        
<Table colCount={2} rowCount={2} >
<Thead>
            <Tr>
              <Th>
              <Typography variant="sigma">ID</Typography>              
              </Th>
              <Th>
                <Typography variant="sigma">Title</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Create</Typography>
              </Th>
              </Tr>
              </Thead>
              {data && data.shahryPacks && <Tbody>
                {data.shahryPacks.map((item) => (
                    <Tr key={item.productID}>
                        <Td>
                        <Typography  variant="sigma">{item.productID}</Typography>
                        </Td>
                        <Td>
                        <Typography variant="sigma">{item.title}</Typography>
                        </Td>
                        <Td>
                        <button  onClick={()=>create(item)} >Add</button>
                        </Td>
                    </Tr>
                    ))}

                </Tbody>}
</Table>

</Box>
  )
}

export default Plans