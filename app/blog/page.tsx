import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: '設計筆記 — 字趣 fontsfun',
  description: '記錄關於字體、排版、品牌設計的思考與觀察。',
};

const categoryMap: Record<string, string> = {
  type: '字體排版', brand: '品牌設計', case: '案例分享', journal: '創作日記',
};

const catFilters = [
  { key: 'all', label: '全部' },
  { key: 'type', label: '字體排版' },
  { key: 'brand', label: '品牌設計' },
  { key: 'case', label: '案例分享' },
  { key: 'journal', label: '創作日記' },
];

const tags = ['繁體中文', '字體設計', '排版技巧', '品牌識別', '標案設計', '書籍排版', '字體授權', '設計流程', '綿甜體', '出版設計', '視覺策略', '工具推薦'];

// Estimated read time
function readTime(excerpt: string) {
  return Math.max(3, Math.round(excerpt.length / 150));
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Page Hero */}
      <div style={{
        padding: '10rem 4rem 4rem',
        borderBottom: '1px solid var(--light-rule)',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'end',
      }}>
        <div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '0.85rem', color: 'var(--warm-mid)',
            letterSpacing: '0.2em', marginBottom: '1rem',
          }}>Design Notes · 設計筆記</p>
          <h1 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 300, fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            lineHeight: 1.3, letterSpacing: '0.06em',
          }}>
            思考<span style={{ color: 'var(--accent)' }}>設計</span>，<br />紀錄創作
          </h1>
        </div>
        <div>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.8rem', color: 'var(--warm-mid)',
            lineHeight: 2, letterSpacing: '0.06em', maxWidth: '28rem',
          }}>記錄關於字體、排版、品牌設計的思考與觀察。從工藝細節到設計哲學，分享創作過程中的所見所想。</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar" style={{
        padding: '2rem 4rem',
        borderBottom: '1px solid var(--light-rule)',
        display: 'flex', gap: 0, alignItems: 'center',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: '0.8rem', color: 'var(--warm-mid)',
          marginRight: '2rem', letterSpacing: '0.1em',
        }}>Category</span>
        {catFilters.map((f, i) => (
          <span key={f.key} style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.12em',
            color: 'var(--warm-mid)',
            borderRight: '1px solid var(--light-rule)',
            borderLeft: i === 0 ? '1px solid var(--light-rule)' : 'none',
            padding: '0.4rem 1.5rem', cursor: 'pointer',
          }}>{f.label}</span>
        ))}
      </div>

      {/* Featured Post */}
      {featured && (
        <div className="featured-wrap" style={{
          padding: '0 4rem', borderBottom: '1px solid var(--light-rule)',
        }}>
          <article style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            borderLeft: '1px solid var(--light-rule)',
            borderRight: '1px solid var(--light-rule)',
          }}>
            <div style={{
              aspectRatio: '16/10',
              background: '#e0d8cc',
              borderRight: '1px solid var(--light-rule)',
              overflow: 'hidden', position: 'relative',
            }}>
              {featured.coverImage ? (
                <img src={featured.coverImage} alt={featured.title} loading="eager" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                }} />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  color: '#bbb',
                }}>[ 精選文章封面圖 ]</div>
              )}
            </div>
            <div style={{
              padding: '4rem 3rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <span style={{
                display: 'inline-block',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.65rem', letterSpacing: '0.15em',
                color: 'var(--accent)', border: '1px solid var(--accent)',
                padding: '0.2rem 0.7rem', marginBottom: '1.5rem',
              }}>{categoryMap[featured.category] || featured.category}</span>
              <h2 style={{
                fontFamily: "'Noto Serif TC', serif",
                fontWeight: 400, fontSize: '1.6rem',
                lineHeight: 1.5, letterSpacing: '0.06em', marginBottom: '1.2rem',
              }}>{featured.title}</h2>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.78rem', color: '#6a6560',
                lineHeight: 2.1, letterSpacing: '0.04em',
              }}>{featured.excerpt}</p>
              <div style={{
                display: 'flex', gap: '1.5rem',
                marginTop: '2rem', paddingTop: '1.5rem',
                borderTop: '1px solid var(--light-rule)',
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)' }}>
                  {featured.date}
                </span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--warm-mid)' }}>
                  {readTime(featured.excerpt)} min read
                </span>
              </div>
              <Link href={`/blog/${featured.slug}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                marginTop: '2rem', alignSelf: 'flex-start',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.15em',
                color: 'var(--ink)', textDecoration: 'none',
                borderBottom: '1px solid var(--ink)', paddingBottom: '0.2rem',
              }}>閱讀全文 →</Link>
            </div>
          </article>
        </div>
      )}

      {/* Posts Grid */}
      <div style={{ padding: '4rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="post-card" style={{
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--light-rule)' : 'none',
                borderBottom: '1px solid var(--light-rule)',
                padding: '2.5rem', cursor: 'pointer', transition: 'background 0.25s',
              }}>
                <div style={{
                  aspectRatio: '16/9', background: '#e8e0d5',
                  marginBottom: '1.5rem',
                  overflow: 'hidden', position: 'relative',
                }}>
                  {post.coverImage ? (
                    <img src={post.coverImage} alt={post.title} loading="lazy" style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    }} />
                  ) : (
                    <div style={{
                      width: '100%', height: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                      fontSize: '0.8rem', color: '#ccc',
                    }}>[ 圖片 ]</div>
                  )}
                </div>
                <span style={{
                  display: 'inline-block', marginBottom: '1rem',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.65rem', letterSpacing: '0.15em',
                  color: 'var(--accent)', border: '1px solid var(--accent)',
                  padding: '0.2rem 0.7rem',
                }}>{categoryMap[post.category] || post.category}</span>
                <h3 style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontWeight: 400, fontSize: '1.05rem',
                  lineHeight: 1.6, letterSpacing: '0.06em', marginBottom: '0.75rem',
                }}>{post.title}</h3>
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.72rem', color: '#888',
                  lineHeight: 2, letterSpacing: '0.04em',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                } as React.CSSProperties}>{post.excerpt}</p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginTop: '1.5rem',
                  paddingTop: '1rem', borderTop: '1px solid var(--light-rule)',
                }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.75rem', color: 'var(--warm-mid)' }}>
                    {post.date}
                  </span>
                  <span style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '0.65rem', color: '#bbb', letterSpacing: '0.1em' }}>
                    {readTime(post.excerpt)} min
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr',
        borderTop: '1px solid var(--light-rule)',
      }}>
        {/* Newsletter */}
        <div style={{ padding: '4rem', borderRight: '1px solid var(--light-rule)' }}>
          <h3 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 400, fontSize: '1.3rem',
            letterSpacing: '0.1em', marginBottom: '0.75rem',
          }}>訂閱設計筆記</h3>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem', color: 'var(--warm-mid)',
            lineHeight: 2, marginBottom: '2rem',
          }}>每月精選文章直送信箱，不定期收到字體設計、排版技巧與創作心得。</p>
          <form style={{ display: 'flex' }}>
            <input
              type="email" placeholder="your@email.com"
              className="newsletter-form"
              style={{
                flex: 1, padding: '0.75rem 1rem',
                border: '1px solid var(--light-rule)', borderRight: 'none',
                background: 'transparent', fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.75rem', color: 'var(--ink)',
                letterSpacing: '0.05em', outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--ink)', color: 'var(--paper)',
              border: '1px solid var(--ink)',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.12em',
              cursor: 'pointer', transition: 'background 0.2s',
            }}>訂閱</button>
          </form>
        </div>

        {/* Tags Panel */}
        <div style={{ padding: '4rem 3rem' }}>
          <h3 style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 400, fontSize: '1rem',
            letterSpacing: '0.12em', marginBottom: '2rem',
            paddingBottom: '0.75rem', borderBottom: '1px solid var(--light-rule)',
          }}>標籤索引</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.65rem', letterSpacing: '0.1em',
                color: 'var(--warm-mid)', border: '1px solid var(--light-rule)',
                padding: '0.3rem 0.8rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
