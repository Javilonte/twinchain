 /* eslint-disable */ 

import React,{useState} from 'react'
import { Layout, Menu } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, FileSearchOutlined, DashboardOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
const pathKeys = {'/dashboard': '1', '/documents': '2', '/profile': '3'}

function SidePannel() {

  let history = useHistory()
  const [activeItem, setActiveItem] = useState(pathKeys[history.location.pathname])



    return (
        
      <Sider width={350} className="site-layout-background" >
      <Menu  mode="inline" defaultSelectedKeys={[activeItem]} style={{padding:30}} className="site-layout-background">
        <Menu.Item key="1" icon={<DashboardOutlined />}
       >
         <Link to='/dashboard'>Tablero</Link> 
        </Menu.Item>
        <Menu.Item key="2" icon={ <FileSearchOutlined />}
         >
        <Link to='/documents'>Documentos</Link>  
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} >        
      
       <Link to='/profile' >Perfil</Link> 
        </Menu.Item>
       
      </Menu>
      </Sider>
       
    )
}

export default SidePannel
