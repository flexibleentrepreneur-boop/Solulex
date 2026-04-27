'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function HyperlocalMap({ center = [7.0, 4.8] }: { center?: [number, number] }) { // Approx Port Harcourt coords
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center,
      zoom: 10,
    });

    // Add sample marker for Nigeria hyperlocal
    new mapboxgl.Marker({ color: '#7C3AED' })
      .setLngLat(center)
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Sample Listing in Port Harcourt</h3>"))
      .addTo(map);

    return () => map.remove();
  }, [center]);

  return <div ref={mapContainer} className="w-full h-96 rounded-3xl overflow-hidden border border-purple-800" />;
}
