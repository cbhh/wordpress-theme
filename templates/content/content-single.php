<?php get_template_part("templates/landing/post-landing") ?>

<div id="primary">
    <div class="primary-mask-top">
        <div></div>
    </div>
    <div class="primary-content">
        <div class="site-content">
            <?php get_template_part("templates/breadcrumb/breadcrumb") ?>
            <main>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                    <footer class="entry-footer">
                        <div class="extra-meta">
                            <div class="post-tag">
                                <i class="fa fa-tags"></i><?php the_tags("<ul><li>", "</li><span>/</span><li>", "</li></ul>") ?>
                            </div>
                            <div class="post-author">
                                <?php $author = get_the_author_meta("ID");
                                $link = get_author_posts_url($author);
                                $display_name
                                    = get_the_author_meta("display_name"); ?>
                                <div class="author-avatar" title="作者：<?php echo $display_name ?>">
                                    <a href="<?php echo $link ?>"><?php echo get_avatar($author) ?></a>
                                </div>
                                <div class="author-profile">
                                    <div aria-label="文章作者">
                                        <span>作者：</span><a href="<?php echo $link ?>"><?php echo $display_name ?></a>
                                    </div>
                                    <div><?php echo get_the_author_meta("description"); ?></div>
                                </div>
                            </div>
                        </div>
                        <div class="block-corner-deco">
                            <span class="tl">❊</span>
                            <span class="tr">❊</span>
                            <span class="bl">❊</span>
                            <span class="br">❊</span>
                        </div>
                    </footer>
                </article>
            </main>
        </div>
        <?php
        get_template_part("templates/sidebar/sidebar-left");
        get_template_part("templates/sidebar/sidebar-right"); ?>
    </div>
</div>