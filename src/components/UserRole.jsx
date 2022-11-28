import style from './UserRole.module.css';

const ROLE_STYLE = {
	teacher: ['profesor', style.teacher],
	student: ['alumno', style.student],
	other: ['Otros', style.other]
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLE[role] || ROLE_STYLE.other;

	return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};

export default UserRole;
