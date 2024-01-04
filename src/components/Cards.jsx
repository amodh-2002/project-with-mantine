import React from 'react';
import { MantineProvider, Card, Image, Text, Button, Box,Flex} from '@mantine/core';
import '@mantine/core/styles.css';
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"


const Cards = ({image,title,sub_title,desc,id,button_name}) => {
  return (
    <>
      <MantineProvider>
        <Card>
          <Flex className='text-center mx-auto flex flex-col items-center justify-center'>
            <Card.Section>
            <Image
              className={`w-[70px]`} 
              src={image}
              alt={title}
            />
            </Card.Section>
            <Text className='text-gray-500 my-2'>{sub_title}</Text>
            <Text className='text-4xl font-bold max-w-[340px] my-2 '>{title}</Text>
            <Box className={`w-20 h-1 mx-10 mt-3 " ${id === 3 ? "bg-orange-500" : "bg-blue-700"}`}></Box>
            <Text className='max-w-[230px] text-gray-700 my-4 leading-10'>{desc}</Text>
              <Link to='work' smooth={true} duration={500}>
                <Button className={`group border-2 px-6 h-12 my-2 flex items-center rounded-md ${id === 3 ? 'bg-orange-500 text-white' : 'text-white bg-blue-700'}`}>{button_name}
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </Button>
              </Link>
          </Flex>
        </Card>
      </MantineProvider>
    </>
  );
};

export default Cards;
