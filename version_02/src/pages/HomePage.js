
import { Footer } from '../components/common/Footer';
import {NavigatorBar} from '../components/common/NavigatorBar';
import { Content } from '../components/Content';

export function HomePage() {
    return(
        <>
            <NavigatorBar />
            <Content />
            <Footer />
        </>
    );
}