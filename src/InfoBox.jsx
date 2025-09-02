
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
    
    
    const hot_url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainy_url="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
  return (
    <div class="InfoBox">
        <div class="Card-container">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 70 ? rainy_url : (info.temp_c > 22 ? hot_url : cold_url)}
  
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Temp: {info.temp_c}°C, <br />
                Heat-index: {info.heatindex_c}°C, <br />
                Condition: {info.condition}, <br />
                Humidity: {info.humidity},  <br />
                Wind-speed: {info.wind_kph}  <br />
                </Typography>
            </CardContent>
            
            </Card>
        </div>
    </div>
  );
}