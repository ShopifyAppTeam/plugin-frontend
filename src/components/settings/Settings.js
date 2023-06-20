import React from 'react'
import { Container, Nav, Navbar, Row } from 'react-bootstrap'
import SidebarMenu, { SidebarMenuCollapse } from 'react-bootstrap-sidebar-menu';
import Header from '../header/Header';
import Orders from '../orders/Orders';
import ShopParams from './ShopParams';
import { Stack } from '@mui/material';
import NotificationParams from './NotificationParams';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Settings() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className='Settings'>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
						<Tab label="Shop" {...a11yProps(0)} />
						<Tab label="Notifications" {...a11yProps(1)} />

					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<ShopParams></ShopParams>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<NotificationParams></NotificationParams>
				</TabPanel>
			</Box>
		</div>
	)
}

export default Settings 