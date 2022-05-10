import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageReports } from './pages/PageReports';
import { PageAbout } from './pages/PageAbout';

function App() {
	return (
		<div className="App">
			<h1>Company Site</h1>
			<hr/>
			<PageWelcome />
			<PageReports />
			<PageAbout />
		</div>
	);
}

export default App;
