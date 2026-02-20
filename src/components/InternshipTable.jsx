// インターンシップ一覧テーブル
import { internships } from '../data/internships';
import { getCompanyLogo } from '../data/companyLogos';

export const InternshipTable = () => {
  // 全インターンを1つの配列にまとめる
  const allInternships = [
    ...internships.undergraduate2,
    ...internships.undergraduate3,
    ...internships.master1,
    ...internships.master2,
  ];

  return (
    <section>
      <h2>インターンシップ一覧</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        maxHeight: '600px',
        overflow: 'auto'
      }}>
        <table className="internship-table">
          <thead>
            <tr>
              <th>会社名</th>
              <th>ポジション</th>
              <th>期間</th>
            </tr>
          </thead>
          <tbody>
            {allInternships.map((internship, index) => {
              const logo = getCompanyLogo(internship.company);
              return (
                <tr key={index}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: logo.logo ? '#fff' : logo.color,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        flexShrink: 0
                      }}>
                        {logo.logo ? (
                          <img src={logo.logo} alt={internship.company} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '2px',
                            borderRadius: '50%'
                          }} />
                        ) : (
                          <span style={{ fontSize: '0.7em', fontWeight: 'bold', color: '#fff' }}>
                            {logo.initial}
                          </span>
                        )}
                      </div>
                      <span>{internship.company}</span>
                    </div>
                  </td>
                  <td>{internship.role}</td>
                  <td>{internship.start} - {internship.end || '継続中'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
