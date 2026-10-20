import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <PageHero title="Page Not Found" sub="That page doesn't exist, or it moved.">
      <Link to="/" className="btn btn--gold" style={{ marginTop: 28 }}>Back to Home</Link>
    </PageHero>
  )
}
