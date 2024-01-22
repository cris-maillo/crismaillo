/* eslint-disable */
import '../../App.css';
import Resource from './Resource';

function Theme({ name, subthemes }) {
    return (
        <div className="theme">
        <div className="themeName">
            <h3>{name}</h3>
        </div>
        {subthemes.map((subtheme, index) => (
            <div className="themeSubname" key={index}>
            <p>
                <b>{subtheme.title}</b>
            </p>
            {subtheme.resources.map((resource, idx) => (
                <Resource key={idx} href={resource.href}>
                    {resource.label}
                </Resource>
            ))}
            </div>
        ))}
        </div>
    );
}

export default Theme;