'use client'

import { useRive } from '@rive-app/react-canvas';

export const CatNotFound = () => {

    const { RiveComponent } = useRive({
        src: '/animations/404-cat.riv',
        autoplay: true,
    });

    return (
        <>
            <RiveComponent />
        </>
    )
}
