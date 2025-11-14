import PixelBlast from '../components/PixelBlast'

export default function Home() {
    return (
        <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <PixelBlast
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '50vh',
                    zIndex: 0
                }}
                variant="square"
                pixelSize={6}
                color="#B19EEF"
                patternScale={3}
                patternDensity={1.2}
                pixelSizeJitter={0.5}
                rippleSpeed={0.4}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                speed={0.6}
                edgeFade={0.25}
                transparent
            />
        </div>
    )
}
