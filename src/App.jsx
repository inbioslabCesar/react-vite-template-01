import UsersList from './components/UsersList';

const USERS = [
	{
		id: 1,
		name: 'Elio Corrales',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Eddy Alejandro',
		active: true,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Cesar Perez',
		active: false,
		role: 'student'
	}
];

const App = () => <UsersList users={USERS} />;

export default App;
