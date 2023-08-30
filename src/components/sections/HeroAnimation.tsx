
import { useRive } from '@rive-app/react-canvas';

export const HeroAnimation = () => {
    const { rive, RiveComponent } = useRive({
        src: '/animations/hero-animation.riv',
        autoplay: true,
        stateMachines: "State Machine 1",
        animations: ['Idle'],
    });

    return (
        <>
            <RiveComponent />
        </>
    )
}
