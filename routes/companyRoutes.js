const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('companies')
  .then(companies => {
    res.json(companies);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get companies',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('companies', 'id', req.params.id)
  .then(company => {
    res.json(company[0]);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get company',
      error: err
    });
  });
});

router.post('/', (req, res) => {
  const owner_id = req.body.owner_id;
  const name = req.body.name;
  const industry = req.body.industry;

  if (!owner_id) {
    res.status(400).json({
      message: 'Please include the owner id for this company'
    });
  }

  const company = {
    owner_id: owner_id,
    name: name,
    industry: industry
  };

  db.create('companies', company)
  .then(company => {
    res.status(201).json({
      message: 'Successfully created company!',
      company: company[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create company',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const owner_id = req.body.owner_id;
  const name = req.body.name;
  const industry = req.body.industry;

  db.read('companies', 'id', id)
  .then(foundCompany => {

    const updatedCompany = {
      owner_id: owner_id || foundCompany[0].owner_id,
      name: name || foundCompany[0].name,
      industry: industry || foundCompany[0].industry
    };

    db.update('companies', 'id', id, updatedCompany)
    .then(company => {
      res.json({
        message: 'Successfully updated company!',
        company: company[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update company',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update company',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('companies', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted company with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete company',
      error: err
    });
  });
});

module.exports = router;
