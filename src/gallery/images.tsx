import { Component, createSignal, For, onMount } from 'solid-js';
import style from './gallery.module.css';

type Image = {
    title: string,
    thumbnailUrl: string
}

const Images: Component = () => {
    const [photos, setPhotos] = createSignal(new Array<Image>);

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        setPhotos(await res.json());
    });

    return <>
        <h1>Photo album</h1>

        <div class={style.photos}>
            <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                <figure>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <figcaption>{photo.title}</figcaption>
                </figure>
            }</For>
        </div>
    </>;
}

export default Images;