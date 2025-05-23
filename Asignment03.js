import React, { useState, useEffect } from 'react';

function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const triggerChildren = React.Children.toArray(children).filter(child => child.type === TabsList);
  const contentChildren = React.Children.toArray(children).filter(child => child.type === TabsContent);

  return (
    <div>
      {React.cloneElement(triggerChildren[0], { activeTab, setActiveTab })}
      {contentChildren.map(child =>
        React.cloneElement(child, { activeTab })
      )}
    </div>
  );
}

function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="grid w-full grid-cols-3">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  return (
    <button
      className={`p-2 ${activeTab === value ? 'bg-gray-300' : 'bg-gray-100'}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, activeTab, children }) {
  if (value !== activeTab) return null;
  return <div className="mt-4">{children}</div>;
}

function Input({ value, onChange, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${className}`}
    />
  );
}

function Card({ children }) {
  return <div className="border rounded shadow-md p-4 bg-white">{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Map({ latitude, longitude }) {
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  return (
    <div className="mt-4">
      <iframe
        title="User Location"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          setCity(data.address.city || data.address.town || data.address.village || 'Unknown');
        } catch (error) {
          setCity('Location Error');
        }
      });
    } else {
      setCity('Geolocation not supported');
    }
  }, []);

  return (
    <div className="p-4">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Card>
            <CardContent className="p-4">
              <h1 className="text-xl font-bold mb-2">Home</h1>
              <p>City: {city}</p>
              {latitude && longitude && <Map latitude={latitude} longitude={longitude} />}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent className="p-4">
              <h1 className="text-xl font-bold mb-2">Settings</h1>
              <p>Settings screen content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile">
          <Card>
            <CardContent className="p-4">
              <h1 className="text-xl font-bold mb-2">{userName}</h1>
              <label className="block mb-2">Edit Name:</label>
              <Input 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                className="w-full"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
