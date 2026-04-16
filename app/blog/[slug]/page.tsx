import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — 字趣 fontsfun`, description: post.excerpt };
}

const categoryMap: Record<string, string> = {
  type: '字體排版', brand: '品牌設計', case: '案例分享', journal: '創作日記',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article style={{ maxWidth: '780px', margin: '0 auto', padding: '6rem 2rem 8rem' }}>
      {/* Breadcrumb */}
      <div style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        fontSize: '0.68rem', color: 'var(--warm-mid)',
        letterSpacing: '0.1em', marginBottom: '3rem',
        display: 'flex', gap: '0.75rem', alignItems: 'center',
      }}>
        <Link href="/blog" style={{ color: 'var(--warm-mid)', textDecoration: 'none' }}>設計筆記</Link>
        <span>›</span>
        <span>{categoryMap[post.category] || post.category}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--light-rule)' }}>
        <span style={{
          display: 'inline-block', marginBottom: '1.5rem',
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.15em',
          color: 'var(--accent)', border: '1px solid var(--accent)',
          padding: '0.2rem 0.7rem',
        }}>{categoryMap[post.category] || post.category}</span>
        <h1 style={{
          fontFamily: "'Noto Serif TC', serif",
          fontWeight: 400, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          lineHeight: 1.5, letterSpacing: '0.06em', marginBottom: '2rem',
        }}>{post.title}</h1>
        <div style={{
          display: 'flex', gap: '2rem',
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.85rem', color: 'var(--warm-mid)',
        }}>
          <span>{post.date}</span>
        </div>
      </header>

      {/* MDX Content */}
      <div style={{
        fontFamily: "'Noto Serif TC', serif",
        fontWeight: 300, fontSize: '1rem',
        lineHeight: 2, letterSpacing: '0.04em', color: 'var(--ink)',
      }}
        className="prose-content"
      >
        <MDXRemote source={post.content} />
      </div>

      {/* Footer nav */}
      <div style={{
        marginTop: '5rem', paddingTop: '3rem',
        borderTop: '1px solid var(--light-rule)',
      }}>
        <Link href="/blog" style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.7rem', letterSpacing: '0.15em',
          color: 'var(--ink)', textDecoration: 'none',
          borderBottom: '1px solid var(--ink)', paddingBottom: '0.2rem',
        }}>← 返回設計筆記</Link>
      </div>
    </article>
  );
}
