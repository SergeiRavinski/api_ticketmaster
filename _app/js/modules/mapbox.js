import { t_map } from "../env.js";

export default function mapbox() {

	const center = [10.7522, 59.9139];
	mapboxgl.accessToken = t_map;
	
	const map = new mapboxgl.Map({
		container: 'map', 
		style: 'mapbox://styles/mapbox/streets-v12',
		center: center,
		zoom: 10,
	});

	const markerElement = document.createElement('div');
	markerElement.classList.add('marker');

	new mapboxgl.Marker(markerElement)
		.setLngLat(center)
		.addTo(map);

	markerElement.addEventListener('click', () => {
		map.flyTo({
			center: center,
			essential: true,
			zoom: 15,
		});
	});

	map.addControl(new mapboxgl.FullscreenControl());
	map.addControl(new mapboxgl.NavigationControl());
}