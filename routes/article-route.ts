import { Request, Response, NextFunction } from 'express';
import Article from '../models/article';

export class ArticleRoute {

  public articleRoute(app): void {
    app.route('/api/').get((req: Request, res: Response, next: NextFunction) => {
      Article.find((err, articles) => {
        if (err) { return next(err); }
        res.json(articles);
      });
    });

    app.route('/api/:id').get((req: Request, res: Response, next: NextFunction) => {
      Article.findById(req.params.id, (err, article) => {
        if (err) { return next(err); }
        res.json(article);
      });
    });

    app.route('/api/').post((req: Request, res: Response, next: NextFunction) => {
      console.log(req.body);
      Article.create(req.body, (err, article) => {
        if (err) { return next(err); }
        res.json(article);
      });
    });

    app.route('/api/:id').put((req: Request, res: Response, next: NextFunction) => {
      Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
        if (err) { return next(err); }
        res.json(article);
      });
    });

    app.route('/api/:id').delete((req: Request, res: Response, next: NextFunction) => {
      Article.findByIdAndRemove(req.params.id, req.body, (err, article) => {
        if (err) { return next(err); }
        res.json(article);
      });
    });
  }
}
